import moment from "moment";

const Session = ({
  sessionLength,
  decrementSessionLengthByOneMinutes,
  incrementSessionLengthByOneMinutes,
}) => {
  const sessionLengthInMinutes = moment
    .duration(sessionLength, "s")
    .asMinutes();
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
