import React, { useState, useEffect } from 'react';

const Hestonection = ({ scrollToSection }) => {
  const obj = 'https://dhgco4b5xc3u.cloudfront.net/Short-video-5.mp4';

  // State to track whether to show the modal or not
  const [showForm, setShowForm] = useState(false);

  // Toggle function to show/hide the modal
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
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-2">
      <div className="md:w-1/2 mb-12 md:mb-0 flex flex-col lg:text-left text-center items-center lg:items-start">
        <h2 className="text-4xl lg:text-6xl font-bold mb-16 leading-tight">
          <span className="block leading-tight">
            <span className="lightning-text inline-block -mb-2 mr-2">A Revolutionary</span>
            <div></div>
            Pivot Pocket Door Frame
          </span>
        </h2>
        <p className="text-3xl mb-16 opacity-90">
          No Assembly Required <div></div>Unfold it. Install it.
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-white text-stone-900 px-8 py-4 w-fit rounded-full text-lg font-semibold hover:bg-primary-lighter transition duration-300 shadow-lg transform hover:scale-105">
          Buy Now
        </button>
      </div>
      <div className="md:w-1/2 w-full flex lg:justify-end">
        <div
          className="rounded-lg flex items-center justify-center"
          style={{
            overflow: 'hidden',
            aspectRatio: '1 / 0.85', // Ensure this matches your video’s aspect ratio
            maxWidth: '100%',
            height: 'auto',
          }}>
          <video
            autoPlay
            loop
            muted
            src={obj}
            className="h-full"
            style={{
              borderRadius: '10px', // Ensures the video also has rounded corners
              objectFit: 'contain',
            }}></video>
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
export default Hestonection;
