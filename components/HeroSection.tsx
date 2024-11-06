// HeroSection.tsx
import React, { useState, useEffect } from 'react';

const images = [
  "/images/slider_1.jpg",
  "/images/slider_2.jpg",
  "/images/slider_3.jpg",
];

const HeroSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-screen text-white bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text Content in Top-Right Corner */}
      <div className="absolute top-10 right-10 z-10 max-w-lg">
        <h1
          className="text-5xl md:text-6xl font-bold text-pink-200"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Esther Hair Salon
        </h1>
      </div>

      {/* Button at the Lower-Left Corner */}
      <div className="absolute bottom-10 left-10 z-10">
        <button
          className="mt-4 px-6 py-2 bg-pink-500 text-white text-lg font-semibold rounded-full hover:bg-pink-600 transition-colors"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Request an Appointment
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
