import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f0c29] text-white text-center py-5 relative bottom-0 w-full shadow-[0_-4px_12px_rgba(0,0,0,0.2)] transition-all ease-in-out duration-300">
      <p className="text-sm font-normal text-[#aaa] m-0 p-0 transition-colors duration-300 ease-in-out hover:text-[#ffcc00]">
        &copy; {new Date().getFullYear()} Owais WebTech. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
