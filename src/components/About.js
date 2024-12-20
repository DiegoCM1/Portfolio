import React from "react";
import Education from "./Education";
import TechStack from "./TechStack";

const About = () => {
  return (
    <section
      id="about"
      className="pl-28 py-10 pr-28 bg-secondaryDarkBlue text-primaryDarkBlue"
    >
      {/* Title Section */}
      <div className="mb-6">
        <h2 className="text-4xl font-bold mb-4 border-b-4 text-textWhite border-textWhite pb-2">
          About Me.
        </h2>
        <p className="text-lg text-textWhite leading-relaxed">
          I’m a Front-End Web Developer, leveraging my experience working on
          digital projects with diverse, international teams. I'm fluent in
          English and enjoy socializing with people from different backgrounds.
          I am organized, responsible, social, highly competitive, and
          results-driven, with the ability to learn quickly and lead efforts in
          the companies/projects I’ve worked on.
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
