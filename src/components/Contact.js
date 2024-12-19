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
      className="p-10 h-screen text-textWhite bg-secondaryDarkBlue px-28 flex flex-col justify-center"
    >
      <div className="flex w-full">
        <div className="text-center flex flex-col items-center justify-center mb-10 w-full">
          <h2 className="text-4xl font-bold mb-4 text-textWhite">Get in Touch.</h2>
          <p className="text-lg">
            I would love to hear from you! Please fill out the form below to
            reach out.
          </p>
        </div>

        <div className="mb-10 w-full">
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-textWhite text-sm font-bold mb-2"
                htmlFor="from_name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-textWhite bg-primaryDarkBlue leading-tight focus:outline-none focus:shadow-outline"
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
                className="block text-textWhite text-sm font-bold mb-2"
                htmlFor="from_email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-textWhite bg-primaryDarkBlue leading-tight focus:outline-none focus:shadow-outline"
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
                className="block text-textWhite text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-textWhite bg-primaryDarkBlue leading-tight focus:outline-none focus:shadow-outline"
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
                className="bg-buttonBlue hover:bg-highlightBlue text-primaryDarkBlue font-bold py-2 px-4 rounded transition-colors duration-200"
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
    className="text-buttonBlue hover:text-highlightBlue transition-colors"
  >
    <FaTwitter />
  </a>
  <a
    href="https://www.linkedin.com/in/luis-colin-mendiola-974679176"
    className="text-buttonBlue hover:text-highlightBlue transition-colors"
  >
    <FaLinkedin />
  </a>
  <a
    href="https://github.com/DiegoCM1"
    className="text-buttonBlue hover:text-highlightBlue transition-colors"
  >
    <FaGithub />
  </a>
  <a
    href="https://www.instagram.com/diego1_cm/"
    className="text-buttonBlue hover:text-highlightBlue transition-colors"
  >
    <FaInstagram />
  </a>
</div>

    </section>
  );
};

export default Contact;
