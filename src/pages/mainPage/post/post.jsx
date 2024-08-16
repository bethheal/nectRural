import React, { useState } from 'react';
import PostModal from './postModal';
import POSTSECTION from './constant';

const Post = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        onClick={handleOpenModal}
      >
        Create Post
      </button>

      {isModalOpen && (
        <PostModal
          handleClose={handleCloseModal}
          draftsButton={POSTSECTION[0].draftsButton}
          postButton={POSTSECTION[0].postButton}
          closeButton={POSTSECTION[0].closeButton}
          avatar={POSTSECTION[0].avatar}
          uploadIcon={POSTSECTION[0].uploadIcon}
          scheduleIcon={POSTSECTION[0].scheduleIcon}
        />
      )}
    </div>
  );
};

export default Post;
