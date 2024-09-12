import React from "react";

const Gallery = () => {
  // Sample images for the gallery
  const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ];

  return (
    <div className="py-32 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center text-tblue mb-8">
        Gallery
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="group relative">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg group-hover:scale-105 transform transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
