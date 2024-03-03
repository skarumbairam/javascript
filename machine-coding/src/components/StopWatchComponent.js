import { useEffect, useState, useRef } from "react";

const StopWatchComponent = () => {
  const [time, setTime] = useState(0);

  // Hours calculation
  //const hours = Math.floor(time / 360000);

  // Minutes calculation
  //const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  const startHandler = () => {
    //setStartTime(Date.now());
  };

  return (
    <div className="space">
      <p className="stopwatch-time">
        {}:{}:{seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <button onClick={() => startHandler()}>Start</button>
      <button>Stop</button>
    </div>
  );
};

export default StopWatchComponent;
