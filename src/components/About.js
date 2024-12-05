import React from "react";
import Education from "./Education";
import TechStack from "./TechStack";

const About = () => {
  return (
    <section className="pl-28 py-10 pr-28 bg-white text-gray-900">
      <div className="">
        <h2 className="text-3xl font-bold mb-4">About.</h2>
        <p className="text-lg">
          With all these components, your App.js will tie everything together.
          Make sure to replace placeholders like path/to/your/photo.jpg and
          path/to/resume.pdf with actual paths. You now have a basic structure
          for your portfolio! This setup ensures your portfolio is
          well-organized and easy to maintain. Feel free to expand and246
        </p>
      </div>

      <div className="flex ">
        <div className="w-1/4">
        <Education />
        </div>
        <div className="w-3/4">
        <TechStack />
        </div>
      </div>
    </section>
  );
};

export default About;
