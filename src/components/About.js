import React from "react";
import Education from "./Education";
import TechStack from "./TechStack";

const About = () => {
  return (
    <section id="about" className="pl-28 py-10 pr-28 bg-secondaryDarkBlue text-primaryDarkBlue">
      {/* Title Section */}
      <div className="mb-6">
        <h2 className="text-4xl font-bold mb-4 border-b-4 text-textWhite border-textWhite pb-2">
          About Me.
        </h2>
        <p className="text-lg text-textWhite leading-relaxed">
          With all these components, your App.js will tie everything together.
          Make sure to replace placeholders like path/to/your/photo.jpg and
          path/to/resume.pdf with actual paths. You now have a basic structure
          for your portfolio! This setup ensures your portfolio is
          well-organized and easy to maintain. Feel free to expand and explore.
        </p>
      </div>

      {/* Education and Tech Stack Section */}
      <div className="flex flex-col lg:flex-row">
        {/* Education */}
        <div className="lg:w-1/3 w-full">
          <Education />
        </div>

        {/* Tech Stack */}
        <div className="lg:w-2/3 w-full">
          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default About;
