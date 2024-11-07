import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="text-white w-full">
      {/* Main Footer Section */}
      <div className="bg-pink-200 p-16 grid grid-cols-1 md:grid-cols-4 gap-8 -mx-4 sm:-mx-8 lg:-mx-16">
        
        {/* Column 1: Contact Information */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Information</h3>
          <p className="text-gray-400">141 Carlton Ave<br />Brooklyn, NY 11205-2281</p>
          <p className="mt-2 text-gray-400">(718) 722-7810</p>
          <p className="mt-2 text-gray-400">info@justbecausehairtherapysalon.com</p>
        </div>

        {/* Column 2: Hours of Operation */}
        <div>
          <h3 className="font-bold text-lg mb-4">Hours of Operation</h3>
          <p className="text-gray-400">Monday to Tuesday: Closed</p>
          <p className="text-gray-400">Wednesday to Saturday: 9:00AM - 5:00PM</p>
          <p className="text-gray-400">Sunday: 11:00AM - 5:00PM</p>
        </div>

        {/* Column 3: Methods of Payment */}
        <div>
          <h3 className="font-bold text-lg mb-4">Methods of Payment</h3>
          <p className="text-gray-400">Visa, MasterCard, American Express, Cash, Debit Card</p>
        </div>

        {/* Column 4: Socials */}
        <div>
          <h3 className="font-bold text-lg mb-4">Socials</h3>
          <div className="flex flex-col space-y-4 mt-4">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={30} className="text-gray-700 hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className="text-gray-700 hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} className="text-gray-700 hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="bg-gray-900 text-center py-6 -mx-4 sm:-mx-8 lg:-mx-16">
        <span>© 2024 Esther Hair Salon. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
