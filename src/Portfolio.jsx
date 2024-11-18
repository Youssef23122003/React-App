import React, { useState } from "react";
import img1 from './assets/poert1.png'
import img2 from './assets/port2.png'
import img3 from './assets/port3.png'


const PortfolioComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [showModal, setShowModal] = useState(false)

  // Array of images
  const images = [img1, img2, img3, img1, img2, img3];

  const handleImageClick = (image) => {
    setSelectedImage(image)
    setShowModal(true)
  };

  const closeModal = () => {
    setShowModal(false)
    setSelectedImage(null)
  };

  return (
    <div className="py-20">
      <div className="flex justify-center text-center">
        <div className="text-center flex flex-col items-center mt-12">
          <div>
            <h1 className="text-darkBlue text-[40.8px] uppercase font-bold mb-[-10px]">
              Portfolio Component
            </h1>
            <div className="mt-5 flex items-center justify-between px-32">
              <div className="firstline w-[80px] h-[4px] bg-darkBlue"></div>
              <i className="fa-solid fa-star text-darkBlue relative"></i>
              <div className="secondtline w-[80px] h-[4px] bg-darkBlue"></div>
            </div>
          </div>
          <div className="w-[88%] m-auto mt-3">
            <div className="flex flex-wrap">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="lg:w-1/3 md:w-1/2 w-full md:px-5 mt-14"
                >
                  <div
                    className="rounded-md cursor-pointer relative group"
                    onClick={() => handleImageClick(image)}
                  >
                    <img
                      src={image}
                      className="w-full rounded-md"
                      alt={`Image ${index + 1}`}
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 rounded-md child flex justify-center items-center transition-all opacity-0 group-hover:opacity-100">
                      <i className="fa-solid fa-plus text-white text-8xl"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative bg-white p-0 rounded-lg max-w-[90%]">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[80vh] rounded-md"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-bold text-white rounded-full p-3"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioComponent;


















