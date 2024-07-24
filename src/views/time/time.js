import React, { useState, useEffect } from "react";

function GetTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  };

  const padZero = (value) => {
    return value.toString().padStart(2, "0");
  };
  return (
    <>
    
      <div className="container mt-5">
        <h1>Hello, It's My Home!</h1>
        <div className="row">
          <h3>Thời gian hiện tại</h3>
          <span>{formatTime(currentTime)}</span>
        </div>
      </div>
    </>
  );
}

export default GetTime;