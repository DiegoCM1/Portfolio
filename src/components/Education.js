import React from "react";

const Education = () => {
  return (
    <div className="text-textWhite">
      {/* Section Title */}
      <h3 className="text-2xl md:text-3xl font-bold mb-4 pb-2">
        Education:
      </h3>

      {/* Education List */}
      <ul className="text-base md:text-lg space-y-3 md:space-y-4">
        <li>● Platzi</li>
        <li>● Coderhouse</li>
      </ul>
    </div>
  );
};

export default Education;
