import { useState } from "react";
import { x } from "../home/constants";

const LikeComment = ({ post }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="flex flex-row mt-4 justify-around">
      <span
        onClick={handleLikeClick}
        className={`hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer ${
          liked ? "text-green-500" : ""
        }`}
      >
        {post.likeIcon} like
      </span>
      <span className="hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
        {post.commentIcon} comment
      </span>
      <span className="hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
        {post.shareIcon} share
      </span>
    </div>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center">
      {x.HOMECARDS.map((post, index) => (
        <div
          key={index}
          className="m-5 mt-10 p-4 h-[27rem] flex flex-col w-[50rem] shadow-sm rounded-lg"
        >
          <div className="flex">
            <span>{post.profileImg}</span>
            <div className="flex flex-col ml-24">
              <span className="font-bold text-[16px]">{post.nameOfSchool}</span>
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
  );
};

export default Home;
