import React from 'react';

const SubscribeSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[50vh] bg-white text-black relative px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Sign up For{' '}
        <span className="text-pink-600">Exclusive Deals</span>
        <br />
        and Updates
      </h2>

      <p className="text-gray-600 text-center mb-6">
        Subscribe to our newsletter and receive the latest offers.
      </p>

      {/* Email Input and Subscribe Button */}
      <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md w-full max-w-2xl border">
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="flex-grow px-6 py-4 text-black outline-none placeholder-gray-500"
        />
        <button className="bg-gradient-to-r from-pink-500 to-pink-400 text-white px-8 py-4 text-lg font-semibold hover:opacity-90 transition-all duration-300">
          →
        </button>
      </div>

      {/* Checkbox and Privacy */}
      <div className="flex items-center gap-2 mt-4">
        <input type="checkbox" id="privacy" className="accent-pink-500" />
        <label htmlFor="privacy" className="text-sm text-gray-600">
          I agree to the{' '}
          <a href="#" className="text-pink-600 underline">
            Privacy Policy
          </a>
        </label>
      </div>
    </div>
  );
};

export default SubscribeSection;
