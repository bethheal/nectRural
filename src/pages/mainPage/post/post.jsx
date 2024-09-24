import React, { useState } from "react";
import PostModal from "./postModal";
import { Schedule } from "@mui/icons-material";
import { ImagesIcon } from "lucide-react";

const Post = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postList, setPostList] = useState([]); // Store posts here

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddPost = (newPost) => {
    setPostList((prevPosts) => [newPost, ...prevPosts]); // Update the list of posts
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {postList.length === 0 ? (
        <p>No post yet</p>
      ) : (
        <div className="w-full">
          {postList.map((post, index) => (
            <div key={index} className="border p-4 m-2 rounded-md bg-gray-100">
              <h3 className="font-bold">{post.title}</h3>
              <p>{post.description}</p>
              {post.image && <img src={post.image} alt="Post" className="mt-2" />}
            </div>
          ))}
        </div>
      )}

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none mt-4"
        onClick={handleOpenModal}
      >
        Create Post
      </button>

      {isModalOpen && (
        <PostModal
          handleClose={handleCloseModal}
          handleAddPost={handleAddPost} // Pass the callback to add a post
          draftsButton="Save Drafts"
          postButton="Post"
          avatar="/path/to/avatar.jpg"
          uploadIcon={ImagesIcon}
          scheduleIcon={Schedule}
        />
      )}
    </div>
  );
};

export default Post;
