import React from 'react';
import { Avatar } from '@mui/material';

const NotificationCard = ({ profileImg, nameOfSchool, description }) => {
  return (
    <div className="flex flex-col h-full  justify-center items-center">

    <div className="flex items-start p-4 border rounded-3xl bg-[#D9D9D9] shadow-lg mb-4">
      <div className="mr-4 h-12 w-12">
        {profileImg}
      </div>
      <div className="flex flex-col">
        <div className="font-bold text-lg">{nameOfSchool}</div>
        <p >{description.slice(0, 100)}{description.length > 100 ? '...' : ''}</p>
      </div>
    </div>
    </div>


  );
};

export default NotificationCard;
