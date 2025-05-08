import React from "react";
import Education from "./Education";
import TechStack from "./TechStack";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-12 lg:px-28 py-10 bg-secondaryDarkBlue dark:bg-dark-background text-primaryDarkBlue dark:text-dark-textPrimary"
    >
      {/* Title Section */}
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-textWhite dark:text-dark-textPrimary pb-2">
          About<span className="text-buttonBlue dark:text-dark-accent">.</span>
        </h2>
        <p className="text-base md:text-lg text-textWhite dark:text-dark-textSecondary leading-relaxed">
          Self-taught full-stack developer and AI builder — bilingual in Spanish
          and English, now learning Dutch. I’ve learned it all the same way I
          learned to code: with discipline and obsession. I’ve co-founded two
          startups, won the{" "}
          <a
            href="https://about.fb.com/news/2025/04/llama-impact-grant-recipients/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-400 transition-colors"
          >
            Meta's Llama 3.1 Impact Grants
          </a>
          , building BluEye ($100,000 regional prize), and stay active in the tech scene through events, networking, and
          constant learning. I build fast, think big, and don’t wait for
          permission.
        </p>
      </div>

      {/* Education and Tech Stack Section */}
      <div className="flex flex-col lg:flex-row gap-6">
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
