import { useState } from "react";

export default function AskAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        💬 Ask about me
      </button>

      {/* Chat popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-[350px] h-[500px] bg-white rounded-lg shadow-xl border">
          <div className="flex justify-between items-center p-2 bg-gray-100 border-b">
            <span className="font-semibold">Ask Me About Diego</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <iframe
            src="https://diego-personalchatbot.streamlit.app/?embed=true"
            className="w-full h-full border-none"
            title="Ask About Diego"
          />
        </div>
      )}
    </>
  );
}
