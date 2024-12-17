import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="p-10  bg-white text-gray-900 px-28">
      <div className="flex w-full">
        <div className="text-center flex flex-col items-center justify-center mb-10 w-full">
          <h2 className="text-3xl font-bold mb-4">Get in Touch.</h2>
          <p className="text-lg">
            I would love to hear from you! Please fill out the form below to
            reach out.
          </p>
        </div>

        <div className="mb-10 w-full">
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-center space-x-5 text-4xl mt-10">
        <a href="https://x.com/Diego__Mendiola?mx=2" className="text-blue-400">
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/luis-colin-mendiola-974679176"
          className="text-blue-700"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/DiegoCM1" className="text-black">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/diego1_cm/" className="text-pink-600">
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default Contact;
