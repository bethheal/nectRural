import React from 'react';

const NgoSection = ({ profileData, setProfileData }) => {
  const handleCertificateChange = (e) => {
    setProfileData({ ...profileData, certificateNumber: e.target.value });
  };

  const handleSocialLinksChange = (e) => {
    setProfileData({ ...profileData, socialLinks: e.target.value });
  };

  return (
    <div className="mt-4">
      <label className="block text-lg font-medium mb-2">Certificate Number</label>
      <input
        type="text"
        placeholder="Enter Certificate Number"
        value={profileData.certificateNumber || ''} // Default to empty string if undefined
        onChange={handleCertificateChange}
        className="block w-full p-2 border rounded mb-2"
      />

      <label className="block text-lg font-medium mb-2">Social Media Links</label>
      <input
        type="text"
        placeholder="Enter Social Media Links"
        value={profileData.socialLinks || ''} // Default to empty string if undefined
        onChange={handleSocialLinksChange}
        className="block w-full p-2 border rounded mb-2"
      />
    </div>
  );
};

export default NgoSection;
