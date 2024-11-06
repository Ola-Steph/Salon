// ServicesSection.tsx
import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <div
      className="relative bg-fixed bg-cover bg-center py-16 px-10"
      style={{ backgroundImage: "url('/images/barber.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      {/* Content on top of overlay */}
      <div className="relative text-white grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* Column 1 */}
        <div className="text-left">
          <h2
            className="text-3xl md:text-4xl font-bold text-pink-200 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Premium Hair Salon Services
          </h2>
          <p className="leading-relaxed mb-4">
            We pride ourselves on being able to offer our beloved clients a vast array of services. There truly is something for everyone, including:
          </p>
          <ul className="list-disc pl-4">
            <li className="mb-2">Hair Coloring</li>
            <li className="mb-2">Extension Application</li>
            <li className="mb-2">Sew-In Application</li>
            <li className="mb-2">Cuts for Men and Women</li>
            <li className="mb-2">Silk Press Application</li>
            <li className="mb-2">Hairstyling</li>
            <li className="mb-2">Relaxing Treatments</li>
            <li className="mb-2">Fade Cuts</li>
            <li className="mb-2">Dreadlocks</li>
            <li className="mb-2">Braiding</li>
          </ul>
          {/* Contact Us Button with full column width */}
          <button className="mt-6 bg-pink-500 text-white font-semibold py-2 w-full rounded hover:bg-pink-600 transition-all duration-300">
            Contact Us
          </button>
        </div>
        
        {/* Column 2 */}
        <div className="text-left">
          <h3
            className="text-2xl font-semibold text-pink-200 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hairstylists You Can Trust
          </h3>
          <p className="leading-relaxed mb-4">
            All our skilled stylists have an in-depth knowledge of the custom needs of many different hair textures and types. Regardless of whether your hair is curly, kinky, coiled, straight, wavy, or a combination, we will be able to give you a beautiful style you’ll want to show off!
          </p>
          <p className="leading-relaxed mb-4">
            A team of stylists that understands different hair textures can be difficult to find and is not something you typically get at most other hair salons. Our dedication to diversity is what puts our salon and services above the rest!
          </p>
          <h3
            className="text-2xl font-semibold text-pink-200 mt-6 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Booking Your Appointment at Our Hair Studio is Easy
          </h3>
          <p className="leading-relaxed">
            Before you sit down in the chair, we offer all new clients a consultation at which time we can get to know your natural hair texture and what your hair goals are. Looking at the state of your natural locks will allow us to come up with a styling plan that is healthy, suitable, and stunning for your hair.
          </p>
          <p className="leading-relaxed mt-4">
            The consultation will allow us to guarantee further that you will love your look. After all, customer satisfaction is what we do best! To book your appointment, simply call us or come by the salon.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ServicesSection;
