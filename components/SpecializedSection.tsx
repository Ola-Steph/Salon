// SpecializedSection.tsx
import React from 'react';
import Image from 'next/image';

const SpecializedSection: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-10 flex flex-col md:flex-row items-center">
      
      {/* Left Side - Text Content */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">Specialized Hair Care at Our Natural Hair Salon</h2>
        <p className="leading-relaxed mb-6">
          On top of providing our customers with stunning new crowns, our team is also dedicated to teaching our clients how to love and care for their natural locks. Good natural hair care varies depending on your hair health and texture. We can help you to identify what your hair needs to look and feel amazing––day in and day out.
          <br /><br />
          Showing you how to love your natural beauty is one of our favorite parts of the job!
        </p>
        <button className="bg-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded hover:bg-yellow-400 transition-all duration-300">
          Learn More
        </button>
      </div>

      {/* Right Side - Image with Shadow */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/images/natural.jpg"
          alt="Specialized Hair Care"
          width={500}
          height={500}
          className="rounded-lg shadow-2xl shadow-black"
        />
      </div>
    </div>
  );
};

export default SpecializedSection;
