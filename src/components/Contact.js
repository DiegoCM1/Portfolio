import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

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
          alert("Message Sent Successfully!");
          setFormData({ from_name: "", from_email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          alert("Failed to Send Message. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="p-10 h-screen text-textWhite bg-secondaryDarkBlue dark:bg-dark-background px-28 flex flex-col justify-center"
    >
      <div className="flex w-full">
        <div className="text-center flex flex-col items-center justify-center mb-10 w-full">
          <h2 className="text-4xl font-bold mb-4 text-textWhite dark:text-dark-textPrimary">
            Get in Touch<span className="text-buttonBlue dark:text-dark-accent">.</span>
          </h2>
          <p className="text-lg dark:text-dark-textSecondary">
            I would love to hear from you! Please fill out the form below to
            reach out.
          </p>
        </div>

        <div className="mb-10 w-full">
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-textWhite dark:text-dark-textPrimary text-sm font-bold mb-2"
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
                className="block text-textWhite dark:text-dark-textPrimary text-sm font-bold mb-2"
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
                className="block text-textWhite dark:text-dark-textPrimary text-sm font-bold mb-2"
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
                className="flex items-center bg-buttonBlue text-primaryDarkBlue dark:text-dark-background hover:text-buttonBlue dark:hover:text-dark-accent font-bold py-2 px-4 rounded-full mr-2 hover:bg-primaryDarkBlue dark:hover:bg-dark-secondary transition-colors duration-200"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-center space-x-5 text-4xl mt-10">
        <a
          href="https://x.com/Diego__Mendiola?mx=2"
          className="text-buttonBlue dark:text-dark-accent hover:text-blue-300 dark:hover:text-dark-textSecondary transition-colors"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/luis-colin-mendiola-974679176"
          className="text-buttonBlue dark:text-dark-accent hover:text-blue-300 dark:hover:text-dark-textSecondary transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/DiegoCM1"
          className="text-buttonBlue dark:text-dark-accent hover:text-blue-300 dark:hover:text-dark-textSecondary transition-colors"
        >
          <FaGithub />
        </a>
        <a
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
