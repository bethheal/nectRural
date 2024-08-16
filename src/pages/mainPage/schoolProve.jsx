import React, { useState } from 'react';

const SchoolSection = () => {
  const [certificatePreview, setCertificatePreview] = useState(null);

  const handleCertificateImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCertificatePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-8 p-6  rounded-lg shadow-lg">
      <div className="mb-6">
        <label htmlFor="certificateType" className="block text-sm font-medium text-gray-800 mb-2">
          Certificate Type
        </label>
        <select
          id="certificateType"
          className="w-full h-14 p-4 border border-gray-300 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select Certificate Type</option>
          <option value="GES">GES Certificate Number</option>
          <option value="School">School Certificate Number</option>
          <option value="Business">Business Certificate Number</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="certificateNumber" className="block text-sm font-medium text-gray-800 mb-2">
          Certificate Number
        </label>
        <input
          id="certificateNumber"
          type="text"
          placeholder="Enter Certificate Number"
          className="w-full h-14 p-4 border border-gray-300 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="certificateImage" className="block text-sm font-medium text-gray-800 mb-2">
          Upload Certificate Image
        </label>
        <input
          id="certificateImage"
          type="file"
          accept="image/*"
          onChange={handleCertificateImageChange}
          className="w-full h-14 p-4 border border-gray-300 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {certificatePreview && (
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-800 mb-2">Certificate Preview</label>
          <img
            src={certificatePreview}
            alt="Certificate Preview"
            className="w-full h-auto border border-gray-300 rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  );
};

export default SchoolSection;
