import React from "react";
import moment from "moment";

const Break = ({
  breakLength,
  decrementBreakLengthByOneMinutes,
  incrementBreakLengthByOneMinutes,
}) => {
  const breakLengthInMinutes = moment.duration(breakLength, "s").asMinutes();
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
