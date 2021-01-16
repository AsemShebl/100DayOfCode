import React, { useEffect, useState } from "react";
import moment from "moment";

const Break = () => {
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
  const breakLengthInMinutes = moment.duration(breakLength, "s").minutes();
  return (
    <div>
      <p id="break-label">Break</p>
      <p id="break-length">{breakLengthInMinutes}</p>
      <button id="break-decrement" onClick={decrementBreakLengthByOneMinutes}>
        -
      </button>
      <button id="break-increment" onClick={incrementBreakLengthByOneMinutes}>
        +
      </button>
    </div>
  );
};
export default Break;
