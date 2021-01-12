import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";

class App extends Component {
  nextQuoteClickHandler() {
    console.log("h1");
  }

  render() {
    return (
      <div className="App" id="quote-box">
        <Button
          buttonDisplayNone="Next Quote"
          onClick={this.nextQuoteClickHandler}
        />
      </div>
    );
  }
}

export default App;
