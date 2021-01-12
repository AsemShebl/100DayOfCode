import React from "react";
import Button from "./Button";

const QuotesMachine = (props) => (
  <>
    {props.selectedQuote
      ? `"${props.selectedQuote.quote}" - ${props.selectedQuote.author}`
      : ""}
    <Button
      buttonDisplayNone="Next Quote"
      clickHandler={props.assignNewQuoteIndex}
    />
  </>
);

export default QuotesMachine;
