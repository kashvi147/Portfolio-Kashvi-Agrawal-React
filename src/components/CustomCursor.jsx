import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  const [text, setText] = useState("");

  useEffect(() => {

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const updateText = (e) => {

      const cursorText = e.target.closest("[data-cursor]");

      if (cursorText) {
        setText(cursorText.dataset.cursor);
      } else {
        setText("");
      }

    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", updateText);

    return () => {

      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", updateText);

    };

  }, []);

  return (

    <motion.div

      className="custom-cursor"

      animate={{
        x: position.x,
        y: position.y
      }}

      transition={{
        type: "spring",
        stiffness: 700,
        damping: 35
      }}

    >

      {text && (

        <motion.div

          className="cursor-text"

          initial={{
            opacity: 0,
            y: 10
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          exit={{
            opacity: 0
          }}

        >

          {`> ${text}_`}

        </motion.div>

      )}

    </motion.div>

  );

}

export default CustomCursor;