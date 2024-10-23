import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url, onLoaded }) {
  const groupRef = useRef();
  const objRef = useRef();
  const obj = useLoader(OBJLoader, url);
  const { scene } = useThree();

  useEffect(() => {
    if (obj) {
      objRef.current = obj;

      const scaleFactor = 0.005;
      objRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);

      const box = new THREE.Box3().setFromObject(objRef.current);
      const center = box.getCenter(new THREE.Vector3());
      objRef.current.position.sub(center);

      const sphere = box.getBoundingSphere(new THREE.Sphere());

      groupRef.current.add(objRef.current);
      scene.add(groupRef.current);

      onLoaded(sphere);
    }
  }, [obj, scene, onLoaded]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return <group ref={groupRef} />;
}

export default function ProductViewer() {
  const [boundingSphere, setBoundingSphere] = useState(null);
  const cameraRef = useRef();

  const cameraPositionFactor = 0.8;
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

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1080px',
        height: '650px',
        margin: 'auto',
      }}>
      <Canvas>
        <PerspectiveCamera ref={cameraRef} makeDefault fov={68} />
        {/* <ambientLight intensity={0.9} /> */}
        <ambientLight intensity={0.7} color={0xffffff} />
        <directionalLight intensity={0.8} position={[1, 1, 1]} />
        <pointLight intensity={0.5} position={[0, 200, 200]} />
        <spotLight intensity={0.5} position={[0, 500, 200]} />

        <pointLight position={[10, 10, 10]} />
        <Suspense
          fallback={
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="hotpink" />
            </mesh>
          }>
          <Model url="/metal-main.obj" onLoaded={setBoundingSphere} />
        </Suspense>
        <OrbitControls enableDamping={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
