import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShareOptions = ({ handleClose, shareUrl }) => {
    const notifyCopy = () => {
        toast.success('Link copied to clipboard!', {
          position: toast.POSITION.TOP_RIGHT, // Position of the toast
          autoClose: 3000, // Auto close after 3 seconds
        });
      };
    
      const handleCopy = () => {
        navigator.clipboard.writeText(shareUrl)
          .then(() => {
            notifyCopy(); // Show toast notification on successful copy
          })
          .catch(err => {
            toast.error('Failed to copy link'); // Optional: Handle errors
          });
      };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
        <button
          className="absolute top-2 right-2 text-red-500 hover:text-gray-700 focus:outline-none"
          onClick={handleClose}
        >
          X
        </button>
        <h3 className="text-lg font-semibold mb-4">Share this post</h3>
        <div className="flex flex-col space-y-2">
          <button
            onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(shareUrl)}`, '_blank')}
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Share on WhatsApp
          </button>
          <button
            onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`, '_blank')}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Share on Twitter
          </button>
          <button
            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Share on Facebook
          </button>
          <button
            onClick={handleCopy}
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          >
            Copy Link
          </button>
        </div>
      </div>
      <ToastContainer /> {/* Include ToastContainer in the component */}
    </div>
  );
};

export default ShareOptions;
