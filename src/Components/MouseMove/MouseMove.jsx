import { useEffect } from "react";
import "./MouseMove.css";

const MouseMove = () => {
  useEffect(() => {
    const spark = (event) => {
      const count = 10;

      for (let j = 0; j < count; j++) {
        const i = document.createElement("i");
        i.style.left = event.pageX + "px";
        i.style.top = event.pageY + "px";
        i.style.scale = `${Math.random() * 2}`;
        i.style.setProperty("--x", getRandomTransitionValue());
        i.style.setProperty("--y", getRandomTransitionValue());

        document.body.appendChild(i);

        setTimeout(() => {
          document.body.removeChild(i);
        }, 2000);
      }
    };

    function getRandomTransitionValue() {
      return `${Math.random() * 400 - 200}px`;
    }

    window.addEventListener("mousemove", spark);

    return () => {
      window.removeEventListener("mousemove", spark);
    };
  }, []);

  return <></>;
};

export default MouseMove;
