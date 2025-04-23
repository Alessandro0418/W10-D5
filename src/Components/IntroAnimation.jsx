import { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function IntroAnimation({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          onFinish();
          return 100;
        }
        return prevProgress + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="intro-animation">
      <img className="popup-animation" src="/logos/apple.svg" alt="logo" />
      <ProgressBar
        className="mt-4 popup-animation"
        animated
        now={progress}
        variant="light"
        style={{ width: "200px", height: "6px" }}
      />
    </div>
  );
}

export default IntroAnimation;
