import { useState } from "react";
import { askAI } from "../utils/askAi";
import { X, BotMessageSquare, Send } from 'lucide-react';

export default function AskAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const textPlaceHolder = document.getElementById("textPlaceHolder")

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    textPlaceHolder.style.display = "none";
    setLoading(true);
    setAnswer("");

    try {
      const aiReply = await askAI(question);
      setAnswer(aiReply);
    } catch (error) {
      console.error("Failed to get response:", error);
      setAnswer("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-2 shadow-lg flex items-center justify-center bg-buttonBlue text-primaryDarkBlue hover:bg-primaryDarkBlue hover:text-buttonBlue dark:bg-transparent dark:border dark:border-buttonBlue dark:text-buttonBlue dark:hover:text-dark-accent font-bold rounded-full  dark:hover:bg-dark-secondary transition-colors duration-200 md:p-6"
      >
        <BotMessageSquare />
      </button>

      {/* Chat popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-[350px] h-[500px] bg-primaryDarkBlue dark:bg-dark-background border border-buttonBlue/40 rounded-xl text-textWhite dark:text-dark-textPrimary shadow-md flex flex-col p-4">
          <button className="self-end mb-2" onClick={() => setIsOpen(false)}>
            <X />
          </button>

          <div
            id="textPlaceHolder"
            className="h-5/6 py-2 max-h-[600px] overflow-y-auto whitespace-pre-wrap text-center flex items-center justify-center text-3xl font-semibold text-gray-500"
          >
            Ask something about Diego 👋
          </div>


          {answer && (
            <div className="h-5/6 py-2 text-sm overflow-y-auto max-h-[600px] whitespace-pre-wrap">
              {answer}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-row gap-2">
            <input
              type="text"
              placeholder="What is his favorite technology?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="px-3 py-2 w-10/12 rounded bg-dark-background border border-white focus:border-buttonBlue outline-none text-sm"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-transparent border border-white text-white  hover:bg-buttonBlue hover:border-none hover:text-secondaryDarkBlue dark:border dark:border-buttonBlue dark:bg-transparent dark:text-buttonBlue font-bold rounded disabled:opacity-60 w-2/12 flex justify-center items-center"
            >
              {loading ? "Asking..." : <Send />}
            </button>
          </form>


        </div>
      )}
    </>
  );
}
