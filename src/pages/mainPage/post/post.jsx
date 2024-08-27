import React, { useState } from "react";
import PostModal from "./postModal";
import { Schedule, Upload } from "@mui/icons-material";
import { ImagesIcon } from "lucide-react";

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
          draftsButton="Save Drafts"
          postButton="Post"
          avatar="/path/to/avatar.jpg"
          uploadIcon={ImagesIcon} // Pass the icon components directly
          scheduleIcon={Schedule}
        />
      )}
    </div>
  );
};

export default Post;
