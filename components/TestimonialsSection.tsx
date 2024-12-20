import React from 'react';
/* eslint-disable react/no-unescaped-entities */


const TestimonialsSection: React.FC = () => {
  return (
    <div className="bg-white py-16 px-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <h2
          className="text-3xl md:text-4xl font-bold text-pink-200 mb-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Testimonials
        </h2>
        
        {/* Testimonials Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="p-4">
            <div className="text-yellow-500 text-lg mb-4">★★★★★</div>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-gray-700 mb-4">
              "My experience was wonderful. Carol is a great hair stylist, understood what was needed to treat my hair and the style I requested. The salon environment is very clean and professional, and I felt very comfortable. As a customer, I was seen at the time my appointment was scheduled. I highly recommend 'Just Because'."
            </p>
            <p className="font-semibold text-gray-600">- Norma Elliott</p>
          </div>

          {/* Column 2 */}
          <div className="p-4">
            <div className="text-yellow-500 text-lg mb-4">★★★★★</div>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-gray-700 mb-4">
              "I had a silk press today. I absolutely love my hair. Definitely going back in the future. Great Experience."
            </p>
            <p className="font-semibold text-gray-600">- Andrea Harris</p>
          </div>

          {/* Column 3 */}
          <div className="p-4">
            <div className="text-yellow-500 text-lg mb-4">★★★★★</div>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-gray-700 mb-4">
              "I went twice to Just Because. It is worth going to the salon coming from Queens. It is also easy for me because I work in the area. Already my natural hair feels healthy because of their natural products. I'm very satisfied with the natural products. I used the 8oil and now the spray. I look forward to my next appointment."
            </p>
            <p className="font-semibold text-gray-600">- Cs</p>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="mt-10">
          <button className="bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-pink-600 transition-all duration-300 w-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
