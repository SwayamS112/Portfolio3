import { useEffect, useState } from "react";

export default function useTypewriter(words, speed = 80, pause = 1200) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    const timeout = setTimeout(() => {
      setText((prev) =>
        deleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), pause);
      }

      if (deleting && text === "") {
        setDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}
