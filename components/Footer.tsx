// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white">
      {/* Main Footer Section */}
      <div className="bg-pink-300 p-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Contact Information */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Information</h3>
          <p>141 Carlton Ave<br />Brooklyn, NY 11205-2281</p>
          <p className="mt-2">(718) 722-7810</p>
          <p className="mt-2">info@justbecausehairtherapysalon.com</p>
        </div>

        {/* Column 2: Hours of Operation */}
        <div>
          <h3 className="font-bold text-lg mb-4">Hours of Operation</h3>
          <p>Monday to Tuesday: Closed</p>
          <p>Wednesday to Saturday: 9:00AM - 5:00PM</p>
          <p>Sunday: 11:00AM - 5:00PM</p>
        </div>

        {/* Column 3: Methods of Payment */}
        <div>
          <h3 className="font-bold text-lg mb-4">Methods of Payment</h3>
          <p>Credit Card</p>
          <p>Cash</p>
          <p>Mobile Payment</p>
        </div>

        {/* Column 4: Socials */}
        <div>
          <h3 className="font-bold text-lg mb-4">Socials</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="bg-gray-900 text-center py-6">
        <span>© 2024 Just Because Hair Therapy Salon. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
