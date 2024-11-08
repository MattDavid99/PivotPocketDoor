import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url, onLoaded, shouldRotate }) {
  const groupRef = useRef();
  const objRef = useRef();
  const obj = useLoader(OBJLoader, url);
  const { scene } = useThree();

  useEffect(() => {
    if (obj) {
      objRef.current = obj;

      const scaleFactor = 0.005;
      objRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);

      // Centering the object
      const box = new THREE.Box3().setFromObject(objRef.current);
      const center = box.getCenter(new THREE.Vector3());
      objRef.current.position.sub(center);

      const sphere = box.getBoundingSphere(new THREE.Sphere());

      groupRef.current.add(objRef.current);
      scene.add(groupRef.current);

      // Adjusting material to lighten the appearance
      objRef.current.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xd0d0d0, // Lighter gray base color for brightness
            metalness: 0.3, // Reduce metalness to make it reflect more light
            roughness: 0.2, // Slightly increase roughness for better visibility
            envMapIntensity: 1.4, // Adjust reflection intensity
            reflectivity: 0.99, // Slightly lower reflectivity to prevent dark reflections
          });
        }
      });

      onLoaded(sphere);
    }
  }, [obj, scene, onLoaded]);

  useFrame(() => {
    if (groupRef.current && shouldRotate) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return <group ref={groupRef} />;
}

export default function ProductViewer() {
  const [boundingSphere, setBoundingSphere] = useState(null);
  const [shouldRotate, setShouldRotate] = useState(true);
  const cameraRef = useRef();
  const rotationTimeoutRef = useRef();

  const cameraPositionFactor = 0.99;
  const cameraHeight = 0;

  useEffect(() => {
    if (boundingSphere && cameraRef.current) {
      const camera = cameraRef.current;
      const fov = camera.fov * (Math.PI / 180);
      const distance = (boundingSphere.radius / Math.sin(fov / 2)) * cameraPositionFactor;
      const direction = new THREE.Vector3(1, cameraHeight, 1).normalize();
      camera.position.copy(direction.multiplyScalar(distance).add(boundingSphere.center));
      camera.near = distance / 100;
      camera.far = distance * 100;
      camera.lookAt(boundingSphere.center);
      camera.updateProjectionMatrix();
    }
  }, [boundingSphere, cameraPositionFactor, cameraHeight]);

  const handleDragStart = () => {
    setShouldRotate(false);
    clearTimeout(rotationTimeoutRef.current);
  };

  const handleDragEnd = () => {
    rotationTimeoutRef.current = setTimeout(() => {
      setShouldRotate(true);
    }, 5000);
  };

  useEffect(() => {
    return () => clearTimeout(rotationTimeoutRef.current);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <Canvas>
        <PerspectiveCamera ref={cameraRef} makeDefault fov={60} />

        {/* Adjusted lighting to lighten the model */}
        <ambientLight intensity={0.6} color={0xffffff} />
        <directionalLight intensity={1.2} position={[3, 3, 5]} color={0xffffff} />
        <directionalLight intensity={0.8} position={[-3, -3, -5]} color={0xffffff} />

        {/* Additional point lights for consistent illumination */}
        <pointLight intensity={0.6} position={[2, 3, 4]} color={0xffffff} />
        <pointLight intensity={0.4} position={[-2, -1, 1]} color={0xffffff} />

        <Suspense
          fallback={
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="hotpink" />
            </mesh>
          }>
          <Model url="/metal-main.obj" onLoaded={setBoundingSphere} shouldRotate={shouldRotate} />
        </Suspense>
        <OrbitControls
          enableDamping={false}
          enableZoom={true}
          maxDistance={20} // higher number, more they can zoom out
          onStart={handleDragStart}
          onEnd={handleDragEnd}
        />
      </Canvas>
    </div>
  );
}
