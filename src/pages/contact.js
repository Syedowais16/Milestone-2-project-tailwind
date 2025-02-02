import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <div className="bg-gradient-to-br from-[#ff7e5f] to-[#feb47b] p-20 text-center text-white min-h-screen box-border">
      <h2 className="text-4xl font-bold mb-12 border-b-4 border-[#ffcc00] pb-2 uppercase tracking-wide">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-xl mx-auto p-5 bg-black bg-opacity-60 rounded-lg shadow-lg">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
          className="p-4 text-lg rounded-lg border-2 border-white bg-white bg-opacity-10 text-white outline-none transition-all duration-300 focus:border-[#ffcc00]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          onChange={handleChange}
          className="p-4 text-lg rounded-lg border-2 border-white bg-white bg-opacity-10 text-white outline-none transition-all duration-300 focus:border-[#ffcc00]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          onChange={handleChange}
          className="p-4 text-lg rounded-lg border-2 border-white bg-white bg-opacity-10 text-white outline-none transition-all duration-300 focus:border-[#ffcc00]"
        ></textarea>
        <button
          type="submit"
          className="bg-[#ffcc00] text-[#0f0c29] text-lg py-3 px-6 rounded-full font-bold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#ff9900] transform hover:scale-110 active:bg-[#cc7a00]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
