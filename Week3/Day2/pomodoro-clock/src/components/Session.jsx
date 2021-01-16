import React, { useEffect, useState } from "react";
import moment from "moment";

const Session = () => {
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
  const sessionLengthInMinutes = moment.duration(sessionLength, "s").minutes();
  return (
    <div>
      <p id="session-label">Session</p>
      <p id="session-length">{sessionLengthInMinutes}</p>
      <button
        id="session-decrement"
        onClick={decrementSessionLengthByOneMinutes}
      >
        -
      </button>
      <button
        id="session-increment"
        onClick={incrementSessionLengthByOneMinutes}
      >
        +
      </button>
    </div>
  );
};
export default Session;
