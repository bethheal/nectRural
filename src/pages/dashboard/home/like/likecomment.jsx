// src/components/LikeComment.js
import React, { useState } from 'react';
import Modal from '../../../../components/dashbaord/commentModal';
import ShareOptions from '../share/share';

const LikeComment = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [showComment, setComment] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleCloseComment = () => setComment(false);
  const handleShareClick = () => setShowShareOptions(true);
  const handleShareOptionClose = () => setShowShareOptions(false);

  const shareUrl = "https://example.com"; // Replace with your dynamic URL

  return (
    <div className="flex flex-row mt-4 justify-around">
      <span
        onClick={() => setLiked(!liked)}
        className={`hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer ${
          liked ? "text-green-500" : ""
        }`}
      >
        {post.likeIcon} like
      </span>
      <span
        onClick={() => setComment(true)}
        className="hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
      >
        {post.commentIcon} comment
      </span>
      {showComment && (
        <Modal 
          schoolName={post.nameOfSchool}
          profileImg={post.image}
          description={post.description}
          handleClose={handleCloseComment} 
        />
      )}
      <span
        onClick={handleShareClick}
        className="hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
      >
        {post.shareIcon} share
      </span>

      {showShareOptions && (
        <ShareOptions
          shareUrl={shareUrl}
          handleClose={handleShareOptionClose}
        />
      )}
    </div>
  );
};

export default LikeComment;
