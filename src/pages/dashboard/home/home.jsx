import { useState } from "react";
import { x } from "../home/constants";
import LikeComment from "./like/likecomment";
import Loader from "../../../components/auth/loader";
import { noPost } from "../../../assets/images";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading]=useState(false);
  const [isDeleting, setIsDeleting] = useState([false])

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (

    <div>
      {isLoading ? (
        <Loader/>
      ) : (
        <div>
          {post.length == 0 ?(
             <p>
             <img src={noPost} alt="No Data" />
             {/* <p>No skills available</p> */}

           </p>
         ) : (
    <div className={`relative ${modalOpen ? "blur-background" : ""}`}>
      <div className="flex flex-col h-full justify-center items-center">
        {post?.map((post, index) => (
          <div
            key={index}
            className="m-5 mt-24 p-4 h-[27rem] flex flex-col w-[50rem] shadow-sm rounded-lg"
          >
            <div className="flex">
              <span>{post.image}</span>
              <div className="flex flex-col ml-24">
                <span className="font-bold text-[16px]">
                  {post.nameOfSchool}
                </span>
                <p className="font-normal text-[12px]">{post.location}</p>
                <span className="mt-7 font-normal text-[14px]">
                  {post.description}
                </span>
                <span className="mt-7 font-normal text-[14px]">
                  {post.title}
                </span>
              </div>
            </div>

            <div className="bg-white mt-9 flex">
              <span className="h-[16rem] w-full">{post.image}</span>
            </div>

            <LikeComment post={post} />
          </div>
        ))}
      </div>
    </div>
         )}
    </div>

    )}
    </div>
  );
};

export default Home;
