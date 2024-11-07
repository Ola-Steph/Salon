// ContactSection.tsx
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <div
      className="relative bg-fixed bg-cover bg-center py-16 px-10 text-white"
      style={{ backgroundImage: "url('/images/hair1.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      {/* Text Content */}
      <div className="relative max-w-3xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-pink-200 mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Contact Us Now for the Best Local Hair Salon
        </h2>
        <p className="leading-relaxed mb-4">
          With expert stylists, transparent pricing, and beautiful results, we are the hair studio you need to look after all your hair care needs.
        </p>
        <p className="leading-relaxed mb-4">
          We are motivated to consistently give our clients the best quality hair care services at excellent prices. If you are looking for a talented team of hairstylists that know how to work with and care for your hair, look no further.
        </p>
        <p className="leading-relaxed">
          Call us now at <a href="tel:40283320000" className="text-yellow-500 font-semibold">(402) 8332-0000</a> to book your appointment. We look forward to making your hair vision a reality.
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
