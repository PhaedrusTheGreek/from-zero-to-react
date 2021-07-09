import "./Question.css";

function Question(props) {
  return (
    <input className="MyQuestionClass" onChange={props.handleQuestion}></input>
  );
}

export default Question;
