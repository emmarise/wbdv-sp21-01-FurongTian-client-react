import React, {useState} from "react";
import TrueFalseQuestion from "./true-false-question";
import MultipleChoiceQuestion from "./multiple-choice-question";
import "./questions.style.client.css";

const Question = ({question, quizId, submitted}) => {
    const [answer, setAnswer] = useState(null) // temp answer
    const [graded, setGraded] = useState(null) // answer for graded
    return(
        <div>
            <h4>
                {question.question} &nbsp;
                {
                    submitted !== undefined &&
                    <span>
                    {
                        submitted === question.correct &&
                        <i className="fas fa-check"></i>
                    }
                        {
                            submitted !== question.correct &&
                            <i className="fas fa-times"></i>
                        }
                    </span>
                }

            </h4>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalseQuestion
                    question={question}
                    answer={answer}
                    setAnswer={setAnswer}
                    graded={graded}
                    setGraded={setGraded}
                    submitted={submitted}
                />
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoiceQuestion
                    question={question}
                    answer={answer}
                    setAnswer={setAnswer}
                    graded={graded}
                    setGraded={setGraded}
                    submitted={submitted}
                />
            }
            <br/>
            <span className="float-left">
                Your Answer:
            </span>
            {
                submitted !== undefined &&
                <span>
                    {submitted}
                </span>
            }
            <br/>
            <button
                type="button"
                className="btn btn-success float-left"
                disabled
                onClick={() => setGraded(answer)}>
                Grade  (A7 feature, deprecated for A8, use Submit instead)
            </button>
        </div>
    )
}

export default Question;