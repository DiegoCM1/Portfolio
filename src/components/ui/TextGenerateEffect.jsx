import { useEffect, useState } from "react";
import { cn } from "../../lib/utils"; // Utility function for merging Tailwind classes

const TextGenerateEffect = ({ words, className, duration = 500, delay = 0 }) => {
  // State to keep track of words that should be visible
  const [visibleWords, setVisibleWords] = useState([]);

  // Split the input `words` string into an array of individual words
  const wordsArray = words.split(" "); 

  useEffect(() => {
    // Loop through each word and set a timeout to reveal them one by one
    words.split(" ").forEach((word, index) => {
      setTimeout(() => {
        setVisibleWords((prev) => [...prev, word]); // Add word to the state gradually
      }, delay + index * duration); // Delay each word by `delay + index * duration`
    });
  }, [words, duration, delay]); // Re-run this effect whenever `words`, `duration`, or `delay` changes

  return (
    <div className={cn("font-bold text-white text-2xl", className)}>
      {wordsArray.map((word, index) => (
        <span
          key={index} // Each word must have a unique key
          className={cn(
            "inline-block opacity-0 blur-sm transition-all duration-500",
            visibleWords.includes(word) ? "opacity-100 blur-none" : "" // Make the word visible when it’s in `visibleWords`
          )}
        >
          {word}
          &nbsp; {/* Adds a space between words so they don’t stick together */}
        </span>
      ))}
    </div>
  );
};

export default TextGenerateEffect;
