import React from 'react';
import heroImage from '../../assets/document.png'; // Update if needed

const DocumentSection = () => {
  return (
    <div className="bg-gradient-to-r from-pink-50 via-yellow-50 to-purple-50 text-gray-800 py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
      {/* Decorative Gradient Circle Behind Image */}
      <div className="absolute right-10 top-24 w-80 h-80 rounded-full bg-gradient-to-br from-pink-300 via-purple-300 to-yellow-200 blur-3xl opacity-60 z-0"></div>

      {/* Left Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-purple-800">
          Welcome to <span className="text-pink-500">Mr. WHIPPY</span>
        </h1>

        <p className="text-lg md:text-xl mt-6 max-w-xl mx-auto md:mx-0 text-gray-700">
          At Mr. WHIPPY, we believe that ice cream brings people together.
          So grab the people you cherish most, a cup or cone of one of our
          delicious flavors, and get ready — you’re in for a real treat!
        </p>

        <button className="mt-8 bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white py-3 px-8 rounded-full text-base font-semibold shadow-lg transition-transform hover:scale-105">
          Explore Our Menu →
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0 relative z-10">
        <img
          src={heroImage}
          alt="Ice Cream Fun"
          className="max-w-[320px] md:max-w-[400px] lg:max-w-[450px] drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default DocumentSection;
