import React from "react";

const Projects = () => {
  return (
    <div className="bg-gradient-to-br from-[#2c3e50] to-[#4ca1af] text-white p-16 text-center min-h-screen flex justify-center items-center flex-col">
      <h2 className="text-4xl font-bold mb-10 border-b-4 border-[#ffcc00] pb-2 uppercase tracking-wider">
        Our Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
        <a
          href="www.khansfragrance.com"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          E-Commerce Platform
        </a>
        <a
          href="https://wysiwygdigital.com"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          Services Website
        </a>
        <a
          href="https://shopvirals.com"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          Toy Store
        </a>
        <a
          href="https://goldenarm-restaurant.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          Restaurant Website
        </a>
      </div>
    </div>
  );
};

export default Projects;
