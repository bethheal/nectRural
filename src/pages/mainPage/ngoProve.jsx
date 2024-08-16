import React from 'react';

const NgoSection = () => {
  return (
    <div className="mt-8 p-6  rounded-lg shadow-lg">
      <div className="mb-6">
        <label htmlFor="certificate-number" className="block text-sm font-medium text-gray-800 mb-2">
          Certificate Number
        </label>
        <input
          type="text"
          id="certificate-number"
          placeholder="Enter Certificate Number"
          className="w-full h-14 p-4 border border-gray-300 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="social-media-links" className="block text-sm font-medium text-gray-800 mb-2">
          Social Media Links
        </label>
        <input
          type="text"
          id="social-media-links"
          placeholder="Enter Social Media Links"
          className="w-full h-14 p-4 border border-gray-300 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );
};

export default NgoSection;
