import logo from "./logo.svg";
import "./App.css";
import Answer from "./Answer";
import Question from "./Question";
import React, { useState } from "react";
import trainingData from "./TrainingData.json";

function App() {
  const [message, setMessage] = useState("Welcome, human!");

  function answerQuestion(event) {
    const asked = event.target.value;
    const askedWords = asked
      .toLowerCase()
      .replace(/[^a-zA-Z ]/g, "")
      .split(/ +/);

    for (const [answer, keywords] of Object.entries(trainingData)) {
      if (asked.length > 2) {
        for (const askedWord of askedWords) {
          if (keywords.includes(askedWord)) {
            setMessage(answer);
          }
        }
      } else {
        setMessage("...");
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        Ask the Answer Bot
        <Question handleQuestion={answerQuestion}></Question>
        <img src={logo} className="App-logo" alt="logo" />
        <Answer message={message}></Answer>
      </header>
    </div>
  );
}

export default App;
