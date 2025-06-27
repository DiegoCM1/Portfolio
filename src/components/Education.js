import React from "react";

const Education = () => {
  return (
    <div className="text-textWhite">
      {/* Section Title */}
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-textWhite dark:text-dark-textPrimary pb-2">
        Education<span className="text-buttonBlue dark:text-dark-accent">.</span>
      </h3>
      {/* Education List */}
      <ul className="text-base md:text-lg space-y-3 md:space-y-4">
        <li>
          <a className="hover:text-buttonBlue" href="https://platzi.com/home/" rel="noopener noreferrer" target="_blank"> ● Platzi | Web Development & AI Schools
          </a>
        </li>
        <li>
          <a className="hover:text-buttonBlue" href="https://www.coderhouse.com/mx/?pipe_source=google&pipe_medium=cpc&pipe_campaign=0&gad_source=1&gad_campaignid=18826029104&gbraid=0AAAAACn2v4w9lSQvZqkCathLM_po4tl1C&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNxHcTXS95yipUSBYp-_DBcfhKKeUcsvaguygpyPRJ5CPyauI6BkM4aAtQiEALw_wcB" rel="noopener noreferrer" target="_blank">
            {" "}
            ● Coderhouse | Web Development Career
          </a>
        </li>
        <li>
          <a className="hover:text-buttonBlue" href="https://www.udemy.com/" rel="noopener noreferrer" target="_blank"> ● Udemy | AI and backend courses</a>
        </li>

        <li>
          <a className="hover:text-buttonBlue" href="https://cloudonair.withgoogle.com/events/startup-school-ai-q2-2025?utm_source=cloud_sfdc&utm_medium=GFS%3DFY25-Q1-LATAM-SMB33145-onlineevent-er-Q2StartupSchool-27574&utm_content=GFSLP" rel="noopener noreferrer" target="_blank">
            {" "}
            ● Google AI Startup School | AI for Founders (2025)
          </a>
        </li>

        <li>
          <a className="hover:text-buttonBlue" href="https://cloudonair.withgoogle.com/events/startup-school-ai-q2-2025?utm_source=cloud_sfdc&utm_medium=GFS%3DFY25-Q1-LATAM-SMB33145-onlineevent-er-Q2StartupSchool-27574&utm_content=GFSLP" rel="noopener noreferrer" target="_blank">
            {" "}
            ● Llama Ecosystem Bootcamp | META, CENTRO (2025)
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Education;
