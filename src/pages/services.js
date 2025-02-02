import React from "react";

const Services = () => {
  return (
    <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-16 text-center min-h-screen flex justify-center items-center flex-col">
      <h2 className="text-4xl font-bold mb-10 border-b-4 border-[#ffcc00] pb-2 uppercase tracking-wider">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full p-5 justify-items-center">
        <div className="bg-[#ffffff1a] p-10 rounded-xl text-xl text-[#ffcc00] transition-transform duration-300 ease-in-out shadow-lg cursor-pointer hover:translate-y-[-10px] hover:shadow-2xl">
          Web Development
        </div>
        <div className="bg-[#ffffff1a] p-10 rounded-xl text-xl text-[#ffcc00] transition-transform duration-300 ease-in-out shadow-lg cursor-pointer hover:translate-y-[-10px] hover:shadow-2xl">
          Wordpress Development
        </div>
        <div className="bg-[#ffffff1a] p-10 rounded-xl text-xl text-[#ffcc00] transition-transform duration-300 ease-in-out shadow-lg cursor-pointer hover:translate-y-[-10px] hover:shadow-2xl">
          Software Engineering
        </div>
        <div className="bg-[#ffffff1a] p-10 rounded-xl text-xl text-[#ffcc00] transition-transform duration-300 ease-in-out shadow-lg cursor-pointer hover:translate-y-[-10px] hover:shadow-2xl">
          UI/UX Designs
        </div>
        <div className="bg-[#ffffff1a] p-10 rounded-xl text-xl text-[#ffcc00] transition-transform duration-300 ease-in-out shadow-lg cursor-pointer hover:translate-y-[-10px] hover:shadow-2xl">
          Generative AI
        </div>
        <div className="bg-[#ffffff1a] p-10 rounded-xl text-xl text-[#ffcc00] transition-transform duration-300 ease-in-out shadow-lg cursor-pointer hover:translate-y-[-10px] hover:shadow-2xl">
          Python Development
        </div>
      </div>
    </div>
  );
};

export default Services;
