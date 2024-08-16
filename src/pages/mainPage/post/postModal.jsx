import React, { useState, useRef, useEffect } from 'react';

const PostModal = ({ handleClose, draftsButton, postButton, closeButton, avatar, uploadIcon, scheduleIcon }) => {
  const [postText, setPostText] = useState('');
  const modalRef = useRef(null);

  const handleInputChange = (event) => {
    setPostText(event.target.value);
  };

  // Close modal if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="bg-white rounded-lg shadow-lg p-10 w-11/12 h-[60%] relative"
        ref={modalRef}
      >
        <div className="space-y-4">
          {/* Avatar and Close Button */}
          <div className="flex justify-between items-center">
            <img
              src={avatar}
              alt="Avatar"
              className="w-12 h-12 rounded-full"
            />
            <button
              className="close-btn text-red-500 hover:text-gray-700 focus:outline-none"
              onClick={handleClose}
            >
              {closeButton}
            </button>
          </div>

          {/* Drafts Button */}
          <div className="flex justify-end">
            <button className="drafts-btn text-gray-500 hover:text-gray-700 focus:outline-none">
              {draftsButton}
            </button>
          </div>

          {/* Text Area for Post */}
          <div className="mt-4">
            <textarea
              value={postText}
              onChange={handleInputChange}
              placeholder="Write your post here..."
              className="comment-input w-full p-4 border focus:outline-none border-gray-300 rounded-md h-40"
            />
          </div>

          {/* Icons Below the Text Area */}
          <div className="flex justify-between mt-4">
            <div className="flex space-x-4">
              {/* Upload Image Icon */}
              <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <span className="material-icons">{uploadIcon}</span>
              </button>

              {/* Schedule Post Icon */}
              <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <span className="material-icons">{scheduleIcon}</span>
              </button>
            </div>

            {/* Post Button */}
            <button
              className="comment-btn bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={() => {
                // Handle post submission logic here
                setPostText(''); // Clear input after submission
                handleClose(); // Close modal after submission
              }}
            >
              {postButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
