import React, {Component} from "react";
import Question from "./question/Question";
import Answer from "./answer/Answer";
import "./Quiz.css"

class Quiz extends Component{

    state = {
        questions: {
            1: "What color is banana?",
            2: "What is the capital of lagos?",
            3: "What color is the sky?"
        },
        answers: {
            1: {
                1: "Purple",
                2: "Yellow",
                3: "Red"
            },
            2: {
                1: "Ilorin",
                2: "Ibadan",
                3: "Ikeja"
            },
            3: {
                1: "Blue",
                2: "Green",
                3: "Pink"
            }
        },  
        correctAnswers: {
            1: "2",
            2: "3",
            3: "1"
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    checkAnswer =(answer)=> {
        const {correctAnswers, step, score} = this.state;
        if (answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            })
        } else {
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            })
        }
    }

    nextStep =(step)=> {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        })
    }

    render(){
        let {questions, step, correctAnswer, clickedAnswer, answers, score} = this.state

        return (
            <div className="Content">
                {step <= Object.keys(questions).length ? 
                  (<div> <Question question={questions[step]}/>
                  <Answer answer={answers[step]} step={step} checkAnswer={this.checkAnswer}
                  correctAnswer={correctAnswer} clickedAnswer={clickedAnswer}/>
                  <button
                  className="NextStep" disabled={clickedAnswer && Object.keys(questions).length >= step ? false : true}
                  onClick={() => this.nextStep(step)}
                  >
                      Next
                  </button>
                </div>) : (
                    <div className="finalPage">
                        <h1>You have completed the quiz!</h1>
                <p>Your score is: {score} of {Object.keys(questions).length}</p>
                <p>Thank you!</p>
                    </div>
                )
                }
            </div>
        )
    }
};
export default Quiz;