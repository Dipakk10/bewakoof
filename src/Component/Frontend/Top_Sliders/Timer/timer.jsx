import { useState, useEffect } from "react";

const Timer24Hr = () => {
  const totalSeconds = 24 * 3600; // 24 hours in seconds
  const [time, setTime] = useState(totalSeconds);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (isAscending) {
          if (prevTime <= 0) {
            setIsAscending(false);
            return prevTime + 1;
          }
          return prevTime - 1;
        } else {
          if (prevTime >= totalSeconds) {
            setIsAscending(true);
            return prevTime - 1;
          }
          return prevTime + 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isAscending]);

  // Convert seconds to hh:mm:ss format
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", margin:'1rem' }}>
      <p style={{fontSize:'0.8em', margin:'0.4rem' }}>Garfield Merch Mania Ends In</p>
      <h3 style={{fontSize:'20px'}}>
        {String(hours).padStart(2, "0")} :{" "}
        {String(minutes).padStart(2, "0")} :{" "}
        {String(seconds).padStart(2, "0")}
      </h3>
      <div style={{fontSize:'14px', gap:'5px'}}><span>hours</span> <span>mins</span> <span>secs</span></div>
    </div>
  );
};

export default Timer24Hr;
