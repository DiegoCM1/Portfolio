import React from "react";

const Header = () => {
  return (
    <header id="home" className="bg-gray-900 text-white w-screen h-screen flex flex-row pl-28 pr-28">
      <div className="w-1/2 h-full flex flex-col justify-center">
        <div>
          <h2 className="text-4xl mt-2">Hi, I'm Diego</h2>
          <h1 className="text-6xl font-bold">Frontend Deveveloper</h1>
          <p className="mt-2 text-2xl">That loves creating web apps</p>
        </div>

        <div className="mt-4">
          <a
            href="/CV_Fronted Developer_Diego Colin.pdf"
            target="_blank"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
          >
            Resume
          </a>

          <a
            href="#work"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Portfolio
          </a>
        </div>
      </div>

      <div className="pl-10 w-1/2 h-full flex items-center justify-center">
        <img
          src="https://ii.ct-stc.com/2/logos/candidates/2024/11/03/1920488503699thumbnail.jpeg"
          alt="Diego"
          className="rounded-full w-64 h-64 mx-auto mb-4"
        />
      </div>
    </header>
  );
};

export default Header;
