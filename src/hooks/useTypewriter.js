import { useEffect, useState } from "react";

export function useTypewriter(words, { type = 90, erase = 45, hold = 1600 } = {}) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const word = words[index % words.length];
    let timeout;

    if (phase === "typing") {
      if (text.length < word.length) {
        timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), type);
      } else {
        timeout = setTimeout(() => setPhase("erasing"), hold);
      }
    } else if (phase === "erasing") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(word.slice(0, text.length - 1)), erase);
      } else {
        setIndex((i) => i + 1);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, index, words, type, erase, hold]);

  return text;
}
