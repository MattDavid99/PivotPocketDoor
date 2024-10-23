import React, { useState, useEffect } from 'react';
import ProductViewer from './ProductViewer';
import { SectionHeader } from './SectionHeader';

export const MetalProAdvantage = ({ scrollToHero }) => {
  const advantages = [
    'Supports up to 300 lbs+ for heavy-duty applications',
    'Corrosion-resistant coating for extended lifespan',
    'Compact design reduces storage space by 70%',
    'Compatible with standard construction tools',
    'Eco-friendly: 100% recyclable materials',
  ];

  // State to track whether to show the iframe or not
  const [showForm, setShowForm] = useState(false);

  // Toggle function to show/hide the form
  const handleButtonClick = () => {
    setShowForm(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowForm(false);
  };

  useEffect(() => {
    if (showForm) {
      // Disable scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scroll
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showForm]);

  return (
    <div className="container mx-auto px-4">
      <SectionHeader
        subheading="Why Choose Us"
        heading="The Pivot Pocket Door Frame Advantage"
        description="Experience the benefits that set Pivot Door Frames apart from traditional framing methods."
      />
      <div className="mx-auto px-4 py-10 lg:py-0 lg:pb-6 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div className="lg:col-start-1">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <ProductViewer />
            </div>
          </div>
          <div className="lg:col-start-2 lg:max-w-2xl mt-10 lg:-mt-10">
            <p className="text-base font-semibold leading-6 text-primary uppercase">The Pivot Pocket Door Frame Advantage</p>
            <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">
              Built to Last, Designed to Excel
            </h4>
            <ul className="mt-8 space-y-3.5 text-lg">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="ml-3 leading-5 text-gray-600">{advantage}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <button
                onClick={handleButtonClick}
                className="bg-primary text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-primary-dark transition duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[10000]">
          {/* Modal Container */}
          <div className="bg-white rounded-lg shadow-xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] max-w-[800px] h-[80vh] relative z-[10001] overflow-hidden flex flex-col pt-12 px-6">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 left-4 text-gray-500 hover:text-gray-800 focus:outline-none p-2 text-2xl z-50">
              ✕
            </button>
            {/* Iframe Wrapper */}
            <div className="flex-grow overflow-y-auto">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdDYia_kfnJLJKP1xf2LI5GWiMm55O49B0XBQC9nR8Oy4uvlw/viewform?embedded=true"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Request Form"
                className="rounded-b-lg">
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
