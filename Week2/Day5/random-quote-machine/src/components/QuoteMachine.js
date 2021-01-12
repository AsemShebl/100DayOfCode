import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const QuotesMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
  <Card>
    <CardContent>
      <Typography>
        {selectedQuote.quote} - {selectedQuote.author}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={assignNewQuoteIndex}>
        Next Quote
      </Button>
      <IconButton
        target="_blank"
        href={`https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=Asem`}
      >
        <FontAwesomeIcon icon={faTwitter} size="sm"></FontAwesomeIcon>
      </IconButton>
    </CardActions>
  </Card>
);

export default QuotesMachine;
