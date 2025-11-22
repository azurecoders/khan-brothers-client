"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const handleClick = () => {
    const whatsappUrl = "https://wa.me/923218980284";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg
                 hover:bg-green-600 transition-all duration-300 ease-in-out
                 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
                 group flex items-center gap-2"
    >
      <FaWhatsapp className="text-2xl md:text-3xl" />
      <span
        className="absolute right-full mr-3 bg-white text-gray-800 px-2 py-1 rounded-lg text-sm
                     invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300
                     whitespace-nowrap shadow-md"
      >
        Chat with us
      </span>
    </button>
  );
};

export default WhatsAppFloat;
