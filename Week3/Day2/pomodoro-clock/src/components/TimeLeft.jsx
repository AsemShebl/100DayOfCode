import React, { useState, useEffect } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);
const TimeLeft = ({ breakLength, sessionLength }) => {
  const [currentSessionType, setCurrentSessionType] = useState("Session"); //'Session' or 'Break'
  const [intervalId, setIntervalId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });
  //change timeLeft whenever sessionLength changes
  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  const isStarted = intervalId !== null;
  const handleStartStopClick = () => {
    if (isStarted) {
      // if we are in the started mode:
      // we want to stop the timer
      //clearInterval
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      //if we are in the stopped mode
      //decrement timeLeft by one every second (1000 ms)
      //using setInterval
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return prevTimeLeft - 1;
          }

          // if session:
          if (currentSessionType === "Session") {
            //switch to break
            setCurrentSessionType("Break");
            //setTimeLeft to breakLength
            setTimeLeft(breakLength);
          }

          // if break:
          if (currentSessionType === "Break") {
            //switch to Session
            setCurrentSessionType("Session");
            //setTimeLeft to SessionBreak
            setTimeLeft(sessionLength);
          }
        });
      }, 100);
      setIntervalId(newIntervalId);
    }
  };

  return (
    <div>
      <p id="timer-label">{currentSessionType}</p>
      <p id="time-left">{formattedTimeLeft}</p>
      <button onClick={handleStartStopClick}>
        {isStarted ? "Stop" : "Start"}
      </button>
    </div>
  );
};
export default TimeLeft;
