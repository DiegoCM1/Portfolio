import { useState } from "react";
import { askAI } from "../utils/askAi";
import { X, BotMessageSquare, Send, LoaderCircle } from 'lucide-react';

export default function AskAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const textPlaceHolder = document.getElementById("textPlaceHolder")

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    const userMessage = { sender: "user", text: question };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setLoading(true);

    try {
      const aiReply = await askAI(question);
      const botMessage = { sender: "bot", text: aiReply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Failed to get response:", error);
      const errorMessage = { sender: "bot", text: "The assistant is taking a nap, try again soon." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-2 shadow-lg flex items-center justify-center bg-buttonBlue text-primaryDarkBlue hover:bg-primaryDarkBlue hover:text-buttonBlue dark:bg-transparent dark:border dark:border-buttonBlue dark:text-buttonBlue dark:hover:text-secondaryDarkBlue dark:hover:bg-buttonBlue font-bold rounded-full  dark:hover:bg-dark-secondary transition-colors duration-200 md:p-6"
      >
        <BotMessageSquare />
      </button>

      {/* Chat popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-[350px] h-[500px] bg-primaryDarkBlue dark:bg-dark-background border border-buttonBlue/40 rounded-xl text-textWhite dark:text-dark-textPrimary shadow-md flex flex-col p-4">
          <button className="self-end mb-2" onClick={() => setIsOpen(false)}>
            <X />
          </button>

          <div className="flex-1 overflow-y-auto py-2 space-y-2">
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center text-3xl font-semibold text-gray-500 text-center">
                <h3>
                   Ask anything about Diego
                   <span className="text-buttonBlue dark:text-dark-accent">.</span>
                </h3>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`px-3 py-2 rounded max-w-[80%] ${msg.sender === "user"
                    ? "bg-buttonBlue text-secondaryDarkBlue dark:text-primaryDarkBlue self-end ml-auto px-4 py-2 rounded-xl shadow-md max-w-[80%]"
                    : "bg-primaryDarkBlue text-white border border-white dark:bg-transparent dark:text-buttonBlue dark:border-buttonBlue self-start mr-auto px-4 py-2 rounded-xl shadow-md max-w-[80%]"
                    }`}
                >
                  {msg.text}
                </div>
              ))
            )}
          </div>


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
              className="transition-colors duration-200 bg-transparent border border-white text-white  hover:bg-buttonBlue hover:border-none hover:text-secondaryDarkBlue dark:border dark:border-buttonBlue dark:bg-transparent dark:text-buttonBlue dark:hover:bg-buttonBlue dark:hover:text-secondaryDarkBlue font-bold rounded disabled:opacity-60 w-2/12 flex justify-center items-center"
            >
              {loading ? <LoaderCircle className="animate-spin" /> : <Send />}
            </button>
          </form>


        </div>
      )}
    </>
  );
}
