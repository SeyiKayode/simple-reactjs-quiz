import React from "react";
import "./Answer.css";

const Answer =(props)=> {
let answer = Object.keys(props.answer).map((qAnswer, i) => (
<li className={
    props.correctAnswer === qAnswer ? "correct" : props.clickedAnswer === qAnswer ? "incorrect" : ""
}
onClick={() => props.checkAnswer(qAnswer)} key={qAnswer}>{props.answer[qAnswer]}</li>))

    return (
        <div>
        <ul disabled={props.clickedAnswer ? true : false} className="Answers">
            {answer}
        </ul>
        <br></br>
        <div>
            { props.correctAnswer ? "Correct Answer!" : props.clickedAnswer ? "Incorrect Answer!" : ""}
        </div>
        <br></br>
        </div>
    )
};
export default Answer;