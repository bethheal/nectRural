import React from 'react';

const SchoolSection = ({ profileData, setProfileData }) => {
  const handleCertificateTypeChange = (e) => {
    setProfileData({ ...profileData, certificateType: e.target.value });
  };

  const handleCertificateNumberChange = (e) => {
    setProfileData({ ...profileData, certificateNumber: e.target.value });
  };

  // const handleFileChange = (e) => {
  //   const selectedFile = e.target.files[0];
  //   if (selectedFile) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setProfileData({ ...profileData, certificateImage: reader.result });
  //     };
  //     reader.readAsDataURL(selectedFile);
  //   }
  // };

  return (
    <div className="mt-10 p-4 border rounded-lg shadow-md bg-white">
      <div className="mb-6">
        <label htmlFor="certificateType" className="block text-lg font-medium mb-2">
          Certificate Type
        </label>
        <select
          id="certificateType"
          onChange={handleCertificateTypeChange}
          className="block w-full p-3 border rounded-xl shadow-md bg-btnBgColor"
        >
          <option value="">Select Certificate Type</option>
          <option value="GES">GES Certificate Number</option>
          <option value="School">School Certificate Number</option>
          <option value="Business">Business Certificate Number</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="certificateNumber" className="block text-lg font-medium mb-2">
          Certificate Number
        </label>
        <input
          id="certificateNumber"
          type="text"
          placeholder="Enter Certificate Number"
          onChange={handleCertificateNumberChange}
          className="block w-full p-3 border rounded-xl shadow-md bg-btnBgColor"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="certificateImage" className="block text-lg font-medium mb-2">
          Upload Certificate Image
        </label>
        <input
          id="certificateImage"
          type="file"
          accept="image/*"
          // onChange={handleFileChange}
          className="block w-full p-3 border rounded-xl shadow-md bg-btnBgColor"
        />
      </div>

        <div className="mt-6">
          <label className="block text-lg font-medium mb-2">Certificate Preview</label>
          <img
            // src={profileData.certificateImage}
            src=''

            alt="Certificate Preview"
            className="w-full h-auto border rounded-lg"
          />
        </div>
      
    </div>
  );
};

export default SchoolSection;
