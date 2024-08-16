import React from 'react';
import NotificationCard from './notificationCard';
import {x} from '../dashboard/home/constants'
const Notifications = () => {
    return (
      <div className="p-4 space-y-4">
        {x.HOMECARDS.map((card, index) => (
          <NotificationCard
            key={index}
            profileImg={card.profileImg}
            nameOfSchool={card.nameOfSchool}
            description={card.description}
          />
        ))}
      </div>
    );
  };


export default Notifications;
