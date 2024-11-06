import React, { useState, useEffect } from 'react';
import { InstallationSteps } from './InstallationSteps';
import { SectionHeader } from './SectionHeader';
import DoubleMetal from '../assets/DoubleDoor-Metal.png';
import DoubleWood from '../assets/DoubleDoor-Wood.png';
import SingleMetal from '../assets/SingleDoor-Metal.png';
import SingleWood from '../assets/SingleDoor-Wood.png';

const ImageOnlyBlock = ({ imageSrc, additionalImageSrc, onClick }) => (
  <div className="flex flex-col items-center space-y-2 mt-4">
    <img src={imageSrc} alt="Pocket Door Diagram" className="w-full max-w-3xl h-auto cursor-pointer" onClick={() => onClick(imageSrc)} />
    <img
      src={additionalImageSrc}
      alt="Additional Pocket Door Diagram"
      className="w-full max-w-3xl h-auto cursor-pointer"
      onClick={() => onClick(additionalImageSrc)}
    />
  </div>
);

export const Installation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Disable background scroll
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = 'auto'; // Re-enable background scroll
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'; // Reset scroll on unmount
    };
  }, []);

  return (
    <div className="container mx-auto px-4">
      {/* Main heading and installation steps */}
      <SectionHeader heading="Pivot Pocket Door Frame" />
      <InstallationSteps />

      {/* Image section with 4 images in 2 columns, evenly spaced */}
      <div className="max-w-full px-8 pt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <ImageOnlyBlock imageSrc={SingleWood} additionalImageSrc={DoubleWood} onClick={openModal} />
        <ImageOnlyBlock imageSrc={SingleMetal} additionalImageSrc={DoubleMetal} onClick={openModal} />
      </div>

      {/* Modal for full-size image view */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative max-w-full max-h-full p-4 md:p-8">
            <img src={currentImage} alt="Expanded view" className="w-auto h-auto max-w-full max-h-[90vh] rounded-lg object-contain" />
            {/* <button
              className="absolute top-12 left-12 text-white text-3xl font-bold w-12 h-12 flex items-center justify-center bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
              onClick={closeModal}>
              &times;
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};
