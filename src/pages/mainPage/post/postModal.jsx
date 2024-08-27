import { Close } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/auth/loader";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { apiAddPost } from "../../../services/post";

const PostModal = ({
  handleClose,
  draftsButton,
  postButton,
  closeButton,
  uploadIcon: UploadIcon,
  scheduleIcon: ScheduleIcon,
}) => {
  const [postText, setPostText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [scheduleDate, setScheduleDate] = useState(null);
  const datePickerRef = useRef(null); // Ref for DatePicker
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleInputChange = (event) => {
    setPostText(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDateChange = (date) => {
    setScheduleDate(date);
  };

  const handleIconClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setFocus(); // Focus on DatePicker input when icon is clicked
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("image", data.image);
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("scheduleDate", data.scheduleDate);

      const res = await apiAddPost(formData);
      console.log(res.data);
      toast.success(res.data.message);
      toast.success("Post added successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => {
      setPostText(""); // Clear input after submission
      setImage(null); // Clear image after submission
      setImagePreview(null);
      setScheduleDate(null); // Clear schedule date
      handleClose(); // Close modal after submission
    }, 2000); // Simulate a delay for submission
  };

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
        className="bg-white rounded-lg shadow-lg p-5 w-11/12 h-[60%] relative"
        ref={modalRef}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {/* Avatar and Close Button */}
            <div className="flex  flex-row justify-between items-center">
              <button
                onClick={() => navigate("mainPage/profile")}
                className="focus:outline-none"
              >
                <Avatar
                  alt="Profile Picture"
                  src="/path/to/profile-picture.jpg"
                  className="w-10 h-10"
                />
              </button>

              {/* Drafts Button */}
              <div className="flex justify-end">
                <button
                  className="drafts-btn text-gray-500 hover:text-gray-700 focus:outline-none"
                  type="button"
                >
                  {draftsButton}
                </button>
              </div>
              <button
                className="close-btn text-red-500 hover:text-gray-700 focus:outline-none"
                onClick={handleClose}
                type="button"
              >
                <Close />
                {closeButton}
              </button>
            </div>

            {/* Title */}
            <div className="mt-4">
              <input
                type="text"
                id="title"
                {...register("title", { required: true })}
                onChange={handleInputChange}
                placeholder="Title"
                className="comment-input w-full p-4 border focus:outline-none border-gray-300 rounded-md"
              />
            </div>

            {/* Text Area for Post */}
            <div className="mt-4">
              <textarea
                id="postText"
                {...register("postText", { required: true })}
                onChange={handleInputChange}
                placeholder="Write your post here..."
                className="comment-input w-full p-4 border focus:outline-none border-gray-300 rounded-md h-40"
              />
            </div>

            <div className="flex flex-row justify-between">
              {/* Image Upload */}
              <div className="items-center mt-4">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="upload-image"
                  onChange={handleImageUpload}
                />
                <label htmlFor="upload-image" className="cursor-pointer">
                  <UploadIcon />
                </label>
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-32 h-32 object-cover ml-2"
                  />
                )}
              </div>

              {/* Schedule Post Date and Time */}
              <div className="items-center mt-4">
                <div className="flex items-center space-x-2">
                  <label htmlFor="schedule-date" className="font-medium">
                    <ScheduleIcon onClick={handleIconClick} />
                  </label>
                  <DatePicker
                    selected={scheduleDate}
                    onChange={handleDateChange}
                    showTimeSelect
                    dateFormat="Pp"
                    className="border rounded-md p-2"
                    ref={datePickerRef} // Attach ref to DatePicker
                  />
                </div>
              </div>

              {/* Post Button */}
              <div className="items-center mt-4">
                <button
                  className="comment-btn bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Loader /> : "POST"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
