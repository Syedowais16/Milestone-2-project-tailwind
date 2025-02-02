import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaHome, FaCogs, FaProjectDiagram, FaEnvelope, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if it's a mobile device
  const checkMobileDevice = () => {
    setIsMobile(window.innerWidth <= 768); // Checks if screen width is 768px or less
  };

  // Hook to add event listener for window resize
  useEffect(() => {
    checkMobileDevice(); // Initial check
    window.addEventListener("resize", checkMobileDevice); // Add listener for window resize

    return () => {
      window.removeEventListener("resize", checkMobileDevice); // Cleanup listener
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-10 h-[70px] bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] shadow-md px-[40px] py-[20px] flex justify-between items-center transition-all ease-in-out">
      <h1 className="text-white text-2xl font-bold uppercase tracking-wide">Owais WebTech</h1>

      {/* On mobile devices, show hamburger icon to toggle sidebar */}
      {isMobile ? (
        <div className="block cursor-pointer" onClick={toggleSidebar}>
          <FaBars className="text-white text-2xl" />
        </div>
      ) : (
        // Regular desktop navbar
        <ul className="flex list-none m-0 p-0">
          <li className="mx-4">
            <Link href="/" legacyBehavior>
              <a className="text-white text-base font-medium capitalize hover:text-[#ffcc00] hover:scale-110 transition-all duration-300">
                <FaHome /> Home
              </a>
            </Link>
          </li>
          <li className="mx-4">
            <Link href="/services" legacyBehavior>
              <a className="text-white text-base font-medium capitalize hover:text-[#ffcc00] hover:scale-110 transition-all duration-300">
                <FaCogs /> Services
              </a>
            </Link>
          </li>
          <li className="mx-4">
            <Link href="/projects" legacyBehavior>
              <a className="text-white text-base font-medium capitalize hover:text-[#ffcc00] hover:scale-110 transition-all duration-300">
                <FaProjectDiagram /> Projects
              </a>
            </Link>
          </li>
          <li className="mx-4">
            <Link href="/contact" legacyBehavior>
              <a className="text-white text-base font-medium capitalize hover:text-[#ffcc00] hover:scale-110 transition-all duration-300">
                <FaEnvelope /> Contact
              </a>
            </Link>
          </li>
        </ul>
      )}

      {/* Sidebar (only visible when the hamburger icon is clicked) */}
      {isMobile && (
        <div
          className={`fixed top-0 left-0 w-[250px] h-full bg-[#24243e] shadow-md transition-all ease-in-out z-20 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="list-none m-0 p-0 pt-[70px]">
            <li className="my-4">
              <Link href="/" legacyBehavior>
                <a
                  onClick={toggleSidebar}
                  className="text-white text-lg font-medium capitalize py-[15px] block transition-all duration-300"
                >
                  <FaHome /> Home
                </a>
              </Link>
            </li>
            <li className="my-4">
              <Link href="/services" legacyBehavior>
                <a
                  onClick={toggleSidebar}
                  className="text-white text-lg font-medium capitalize py-[15px] block transition-all duration-300"
                >
                  <FaCogs /> Services
                </a>
              </Link>
            </li>
            <li className="my-4">
              <Link href="/projects" legacyBehavior>
                <a
                  onClick={toggleSidebar}
                  className="text-white text-lg font-medium capitalize py-[15px] block transition-all duration-300"
                >
                  <FaProjectDiagram /> Projects
                </a>
              </Link>
            </li>
            <li className="my-4">
              <Link href="/contact" legacyBehavior>
                <a
                  onClick={toggleSidebar}
                  className="text-white text-lg font-medium capitalize py-[15px] block transition-all duration-300"
                >
                  <FaEnvelope /> Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
