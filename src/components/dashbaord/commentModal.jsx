import React, { useState, useRef, useEffect } from "react";
import "../../Modal.css";

const Modal = ({ handleClose, schoolName, description, profileImg }) => {
  const [commentText, setCommentText] = useState("");
  const modalRef = useRef(null);

  const handleInputChange = (event) => {
    setCommentText(event.target.value);
  };

  // Close modal if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="bg-white rounded-lg shadow-lg p-10 w-11/12 h-[60%] relative"
        ref={modalRef}
      >
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <button
              className="close-btn text-red-500 hover:text-gray-700 focus:outline-none"
              onClick={handleClose}
            >
              X
            </button>
            <button className="drafts-btn text-gray-500 hover:text-gray-700 focus:outline-none">
              Drafts
            </button>
          </div>
          <div className="flex items-center space-x-4">
            {profileImg}
            <div className="flex flex-col">
              <h2 className="font-medium text-gray-800">{schoolName}</h2>
              <p className="text-gray-700">{description}</p>
            </div>
          </div>
          <div>
            <input
              type="text"
              value={commentText}
              onChange={handleInputChange}
              placeholder="Write your comment here..."
              className="comment-input  w-full p-2 border focus:outline-none border-gray-300 rounded-md mt-2"
            />
          </div>
          <div className="flex justify-end">
            <button
              className="comment-btn bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={() => {
                setCommentText(""); // Clear input after submission
                handleClose(); // Close modal after submission
              }}
            >
              Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
