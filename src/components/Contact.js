import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_refyqzk", // Your EmailJS Service ID
        "template_dwv8gbr", // Your EmailJS Template ID
        formData, // Form data object
        "XeSZEWR13VxFD9J11" // Your EmailJS Public API Key
      )
      .then(
        (result) => {
          console.log("EmailJS Response:", result.text);
          toast.success("Message Sent Successfully!"); // Success toast
          setFormData({ from_name: "", from_email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          alert("Failed to Send Message. Please try again later.");
          toast.error("Failed to Send Message. Please try again."); // Error toast
        }
      );
  };

  return (
    <section
      id="contact"
      className="p-6 md:p-10 lg:px-28 h-full text-textWhite bg-secondaryDarkBlue dark:bg-dark-background flex flex-col justify-center"
    >
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-10">
        <div className="text-center md:text-left w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-textWhite dark:text-dark-textPrimary">
            Get in Touch
            <span className="text-buttonBlue dark:text-dark-accent">.</span>
          </h2>
          <p className="text-base md:text-lg dark:text-dark-textSecondary">
            I would love to hear from you! Please fill out the form to reach
            out.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2 text-textWhite dark:text-dark-textPrimary"
                htmlFor="from_name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-textWhite dark:text-dark-textPrimary bg-primaryDarkBlue dark:bg-dark-surface leading-tight focus:outline-none focus:shadow-outline"
                id="from_name"
                type="text"
                placeholder="Your Name"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2 text-textWhite dark:text-dark-textPrimary"
                htmlFor="from_email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-textWhite dark:text-dark-textPrimary bg-primaryDarkBlue dark:bg-dark-surface leading-tight focus:outline-none focus:shadow-outline"
                id="from_email"
                type="email"
                placeholder="Your Email"
                value={formData.from_email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2 text-textWhite dark:text-dark-textPrimary"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-textWhite dark:text-dark-textPrimary bg-primaryDarkBlue dark:bg-dark-surface leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-buttonBlue hover:bg-primaryDarkBlue text-primaryDarkBlue  hover:text-buttonBlue
                font-bold py-2 px-6 rounded-full transition-colors duration-200
                dark:hover:bg-buttonBlue dark:hover:text-white"
                type="submit"
              >
                Send
              </button>

              <>
                <Toaster position="bottom-center" reverseOrder={false} />
              </>
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-center space-x-4 text-2xl md:text-4xl mt-10">
        <a
          target="_blank"
          href="https://x.com/Diego__Mendiola?mx=2"
          className="text-buttonBlue dark:text-dark-accent hover:text-blue-300 dark:hover:text-dark-textSecondary transition-colors"
        >
          <FaTwitter />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/luis-colin-mendiola-974679176"
          className="text-buttonBlue dark:text-dark-accent hover:text-blue-300 dark:hover:text-dark-textSecondary transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          href="https://github.com/DiegoCM1"
          className="text-buttonBlue dark:text-dark-accent hover:text-blue-300 dark:hover:text-dark-textSecondary transition-colors"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/diego1_cm/"
          className="text-buttonBlue dark:text-dark-accent hover:text-blue-300 dark:hover:text-dark-textSecondary transition-colors"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default Contact;
