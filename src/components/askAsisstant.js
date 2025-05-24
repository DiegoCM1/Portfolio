import { useState } from "react";

export default function AskAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 shadow-lg flex items-center justify-center bg-buttonBlue text-primaryDarkBlue dark:text-dark-background hover:text-buttonBlue dark:hover:text-dark-accent font-bold rounded-full hover:bg-secondaryDarkBlue dark:hover:bg-dark-secondary transition-colors duration-200"
      >
        💬 Ask about me
      </button>

      {/* Chat popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-[350px] h-[500px] bg-primaryDarkBlue dark:bg-dark-background border border-buttonBlue/40 rounded-xl text-textWhite dark:text-dark-textPrimary shadow-md">
          <button className="px-2" onClick={() => setIsOpen(false)}>✖</button>
          <iframe
            src="https://diego-personalchatbot.streamlit.app/?embed=true"
            className="w-full h-full"
            title="Ask About Diego"
          />
        </div>
      )}
    </>
  );
}
