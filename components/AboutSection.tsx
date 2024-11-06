// AboutSection.tsx
import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between py-16 px-10 bg-gray-100 relative">
      {/* Image Section */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <Image
          src="/images/jane.jpg"
          alt="Jane"
          width={500}
          height={500}
          className="rounded-lg shadow-2xl shadow-black"
        />
      </div>

      {/* Text Section with Badge at Bottom */}
      <div className="w-full md:w-1/2 text-right md:pl-10 relative flex flex-col justify-between">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold text-pink-200 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Esther Hair Salon
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Just Because Esther Hair Salon is a hair studio that is dedicated to creating stunning and high-quality hairstyles for people of all genders and backgrounds. Regardless of your style, hair texture, or budget, our talented team of specialists is here to help you with all of your hair care needs.
              <br /><br />
              From color to extensions, to fades, there is very little our knowledgeable and expert stylists cannot pull off. We always strive to come up with unique and timeless styles that will make our clients look and feel their absolute best.
              <br /><br />
              If you are searching for a dedicated and passionate team to help you fulfill your hair goals, contact us now at (402) 8332-0000 and book your appointment!
            </p>
          </div>
          
          {/* Circular Badge with Matching Header Background Color */}
          <div className="flex justify-center mt-10">
            <div className="bg-pink-200 text-gray-800 font-semibold text-center text-xs md:text-lg flex items-center justify-center w-72 h-72 rounded-full shadow-2xl shadow-black">
              Available by Appointment Only
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
