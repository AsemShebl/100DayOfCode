import React, { useState } from "react";
import "./App.css";
import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";

function App() {
  const [sessionLength, setSessionLength] = useState(60 * 25);
  const [breakLength, setBreakLength] = useState(300);

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
  return (
    <div className="App">
      <Break
        breakLength={breakLength}
        decrementbreakLengthByOneMinutes={decrementSessionLengthByOneMinutes}
        incrementbreakLengthByOneMinutes={incrementBreakLengthByOneMinutes}
      />
      <TimeLeft sessionLength={sessionLength} />
      <Session
        sessionLength={sessionLength}
        decrementSessionLengthByOneMinutes={decrementSessionLengthByOneMinutes}
        incrementSessionLengthByOneMinutes={incrementSessionLengthByOneMinutes}
      />
    </div>
  );
}

export default App;
