import React, { useEffect } from "react";

const CustomToast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Automatically close after 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onClose]);

  return (
    <div
      className={`fixed top-[130px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-4 rounded-md shadow-lg text-white text-sm z-50 animate-toast-slide-in-out ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
      style={{ maxWidth: "90%", width: "auto" }}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-4 bg-transparent text-lg font-bold focus:outline-none hover:text-gray-300 transition"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default CustomToast;
