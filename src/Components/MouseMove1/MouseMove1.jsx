import { useEffect } from "react";
import "./MouseMove.css";

const MouseMove = () => {
  useEffect(() => {
    const spark = (event) => {
      const count = 7; // more sparks = more fun 🎉

      for (let j = 0; j < count; j++) {
        const i = document.createElement("i");
        i.style.left = event.pageX + "px";
        i.style.top = event.pageY + "px";
        i.style.setProperty("--x", getRandomTransition());
        i.style.setProperty("--y", getRandomTransition());
        i.style.background = getRandomColor(); // Optional: random color

        document.body.appendChild(i);

        setTimeout(() => {
          document.body.removeChild(i);
        }, 2000);
      }
    };

    const getRandomTransition = () => {
      return `${Math.random() * 400 - 200}px`;
    };

    const getRandomColor = () => {
      const colors = ["#00ffee", "#ff00aa", "#ffaa00", "#00ff88", "#ff4444"];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    window.addEventListener("mousemove", spark);

    return () => {
      window.removeEventListener("mousemove", spark);
    };
  }, []);

  return <></>;
};

export default MouseMove;
