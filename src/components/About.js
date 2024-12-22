import React from "react";
import Education from "./Education";
import TechStack from "./TechStack";

const About = () => {
  return (
    <section
      id="about"
      className="pl-28 py-10 pr-28 bg-secondaryDarkBlue dark:bg-dark-background text-primaryDarkBlue dark:text-dark-textPrimary"
    >
      {/* Title Section */}
      <div className="mb-6">
        <h2 className="text-4xl font-bold mb-4 text-textWhite dark:text-dark-textPrimary pb-2">
          About<span className="text-buttonBlue dark:text-dark-accent">.</span>
        </h2>
        <p className="text-lg text-textWhite dark:text-dark-textSecondary leading-relaxed">
          I'm fluent in English, enjoy practicing contact sports and playing basketball, as well as
          strategy video games. I'm passionate about personal development and a
          dedicated reader. I love traveling and attend tech conferences and
          hackathons. I’m enthusiastic about contributing to open-source and
          creating projects from scratch with like-minded people.
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
