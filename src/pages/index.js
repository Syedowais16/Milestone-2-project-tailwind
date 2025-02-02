import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-16 text-center min-h-screen flex justify-center items-center flex-col shadow-inner">
      <h2 className="text-4xl font-bold mb-5 border-b-4 border-[#ffcc00] pb-2 uppercase tracking-wider">
        Welcome to Owais WebTech
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto opacity-80 leading-relaxed">
        IAM AN EXPERIENCED FULL STACK WEB DEVELOPER
      </p>
      <Link href="/services">
        <button className="bg-[#ffcc00] text-[#0f0c29] text-lg py-3 px-8 rounded-full uppercase font-bold transition-transform duration-300 ease-in-out hover:bg-[#ff9900] hover:scale-110">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Home;
