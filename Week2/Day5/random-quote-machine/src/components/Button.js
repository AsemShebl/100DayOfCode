import React from "react";

const Button = ({ buttonDisplayNone, clickHandler }) => (
  <button onClick={clickHandler}>{buttonDisplayNone}</button>
);

export default Button;
