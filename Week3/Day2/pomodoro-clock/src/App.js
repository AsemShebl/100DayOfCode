import "./App.css";
import React, { useState } from "react";
import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";

function App() {
  const [sessionLength, setSessionLength] = useState(60 * 25);

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

  return (
    <div className="App">
      <Break
        breakLength={breakLength}
        decrementBreakLengthByOneMinutes={decrementBreakLengthByOneMinutes}
        incrementBreakLengthByOneMinutes={incrementBreakLengthByOneMinutes}
      />
      <TimeLeft breakLength={breakLength} sessionLength={sessionLength} />
      <Session
        sessionLength={sessionLength}
        incrementSessionLengthByOneMinutes={incrementSessionLengthByOneMinutes}
        decrementSessionLengthByOneMinutes={decrementSessionLengthByOneMinutes}
      />
    </div>
  );
}

export default App;
