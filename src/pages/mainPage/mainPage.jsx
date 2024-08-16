import React, { useState } from 'react'
import LikeComment from '../dashboard/home/like/likecomment';
import { x } from "../../pages/dashboard/home/constants";

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <div className={`relative ${modalOpen ? "blur-background" : ""}`}>
      <div className="flex flex-col h-full justify-center items-center">
        {x.HOMECARDS.map((post, index) => (
          <div
            key={index}
            className="m-5 mt-24 p-4 h-[27rem] flex flex-col w-[50rem] shadow-sm rounded-lg"
          >
            <div className="flex">
              <span>{post.profileImg}</span>
              <div className="flex flex-col ml-24">
                <span className="font-bold text-[16px]">
                  {post.nameOfSchool}
                </span>
                <p className="font-normal text-[12px]">{post.location}</p>
                <span className="mt-7 font-normal text-[14px]">
                  {post.description}
                </span>
              </div>
            </div>

            <div className="bg-white mt-9 flex">
              <span className="h-[16rem] w-full">{post.postImg}</span>
            </div>

            <LikeComment post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage