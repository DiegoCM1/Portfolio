import React from "react";

const Education = () => {
  return (
    <div className="pt-2 text-gray-900">
      <h2 className="text-3xl font-bold mb-4">Education:</h2>
      <ul className="text-lg flex flex-col lg:flex-row lg:flex-wrap lg:space-x-4">
        {" "}
        <li className="my-2 lg:w-auto">
          ● React.js | Platzi
        </li>{" "}
        <li className="my-2 lg:w-auto">
          ● Web Development Course | Coderhouse
        </li>{" "}
      </ul>
    </div>
  );
};

export default Education;
