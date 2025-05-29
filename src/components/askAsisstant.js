import { useState } from "react";
import { askAI } from "../utils/askAi";

export default function AskAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

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
        className="fixed bottom-6 right-6 z-50 p-4 shadow-lg flex items-center justify-center bg-buttonBlue text-primaryDarkBlue dark:text-dark-background hover:text-buttonBlue dark:hover:text-dark-accent font-bold rounded-full hover:bg-secondaryDarkBlue dark:hover:bg-dark-secondary transition-colors duration-200"
      >
        💬 Ask about me
      </button>

      {/* Chat popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-[350px] h-[500px] bg-primaryDarkBlue dark:bg-dark-background border border-buttonBlue/40 rounded-xl text-textWhite dark:text-dark-textPrimary shadow-md flex flex-col p-4">
          <button className="self-end mb-2" onClick={() => setIsOpen(false)}>
            ✖
          </button>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Ask something about Luis..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="px-3 py-2 rounded bg-dark-background border border-buttonBlue text-sm"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-buttonBlue hover:bg-secondaryDarkBlue text-white font-bold py-2 rounded disabled:opacity-60"
            >
              {loading ? "Asking..." : "Ask"}
            </button>
          </form>

          {answer && (
            <div className="mt-4 text-sm overflow-y-auto max-h-[300px] whitespace-pre-wrap">
              {answer}
            </div>
          )}
        </div>
      )}
    </>
  );
}
