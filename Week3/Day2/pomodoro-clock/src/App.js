import "./App.css";
import React, { useState, useEffect } from "react";
import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";

function App() {
  const [currentSessionType, setCurrentSessionType] = useState("Session"); //'Session' or 'Break'
  const [intervalId, setIntervalId] = useState(null);
  const [sessionLength, setSessionLength] = useState(60 * 25);
  const [breakLength, setBreakLength] = useState(300);
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  //change timeLeft whenever sessionLength changes
  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  const decrementBreakLengthByOneMinutes = () => {
    const newBreakLength = breakLength - 60;
    if (newBreakLength < 0) {
      setBreakLength(0);
    } else {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLengthByOneMinutes = () => {
    setBreakLength(breakLength + 60);
  };

  const decrementSessionLengthByOneMinutes = () => {
    const newSessionLength = sessionLength - 60;
    if (newSessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLength);
    }
  };

  const incrementSessionLengthByOneMinutes = () => {
    setSessionLength(sessionLength + 60);
  };

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
          else if (currentSessionType === "Break") {
            //switch to Session
            setCurrentSessionType("Session");
            //setTimeLeft to SessionBreak
            setTimeLeft(sessionLength);
          }
        });
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  const handleResetButtonClick = () => {
    // clear the timeout interval
    clearInterval(intervalId);
    // set the intervalId null
    setIntervalId(null);
    // set the sessiontype to 'Session'
    setCurrentSessionType("Session");
    // reset the session length to 25 minutes
    setSessionLength(60 * 25);
    // reset the break length to 5 minutes
    setBreakLength(60 * 5);
    // reset the times to 25 minutes (initial session length)
    setTimeLeft(60 * 25);
  };

  return (
    <div className="App">
      <Break
        breakLength={breakLength}
        decrementBreakLengthByOneMinutes={decrementBreakLengthByOneMinutes}
        incrementBreakLengthByOneMinutes={incrementBreakLengthByOneMinutes}
      />
      <TimeLeft
        breakLength={breakLength}
        handleStartStopClick={handleStartStopClick}
        timerLabel={currentSessionType}
        sessionLength={sessionLength}
        startStopButtonLabel={isStarted ? "Stop" : "Start"}
        timeLeft={timeLeft}
      />
      <Session
        sessionLength={sessionLength}
        incrementSessionLengthByOneMinutes={incrementSessionLengthByOneMinutes}
        decrementSessionLengthByOneMinutes={decrementSessionLengthByOneMinutes}
      />
      <button id="reset" onClick={handleResetButtonClick}>
        Reset
      </button>
    </div>
  );
}

export default App;
