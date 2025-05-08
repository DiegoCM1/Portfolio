import React from "react";

const Education = () => {
  return (
    <div className="text-textWhite">
      {/* Section Title */}
      <h3 className="text-2xl md:text-3xl font-bold mb-4 pb-2">Education:</h3>

      {/* Education List */}
      <ul className="text-base md:text-lg space-y-3 md:space-y-4">
        <li>
          <a href="https://platzi.com/home/"> ● Platzi</a>
        </li>
        <li>
          <a href="https://www.coderhouse.com/mx/?pipe_source=google&pipe_medium=cpc&pipe_campaign=0&gad_source=1&gad_campaignid=18826029104&gbraid=0AAAAACn2v4w9lSQvZqkCathLM_po4tl1C&gclid=Cj0KCQjwrPHABhCIARIsAFW2XBNxHcTXS95yipUSBYp-_DBcfhKKeUcsvaguygpyPRJ5CPyauI6BkM4aAtQiEALw_wcB">
            {" "}
            ● Coderhouse
          </a>
        </li>
        <li>
          <a href="https://www.udemy.com/mobile/ipad/"> ● Udemy</a>
        </li>

        <li>
          <a href="https://cloudonair.withgoogle.com/events/startup-school-ai-q2-2025?utm_source=cloud_sfdc&utm_medium=GFS%3DFY25-Q1-LATAM-SMB33145-onlineevent-er-Q2StartupSchool-27574&utm_content=GFSLP">
            {" "}
            ● Google AI Startup School
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Education;
