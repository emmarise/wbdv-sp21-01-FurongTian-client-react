import React, {useState} from "react";

const MultipleChoiceQuestion = ({
                                    question,
                                    answer,
                                    setAnswer,
                                    graded,
                                    setGraded,
                                    submitted}) => {

    return(
        <ul class="list-group">
            {
                question.choices.map((choice, idx) => {
                    return(
                        <li className={`
                            list-group-item
                            ${(submitted !== undefined && submitted === choice) ? "selected" : ""}
                            ${(question.correct === choice && submitted !== undefined) ? "correct" : ""}                            
                            `}
                            key={idx}>
                            <input type="radio"
                                   name={question._id}
                                   value={choice}
                                   onClick={() => {
                                       setAnswer(choice)
                                       question.answer = choice
                                   }}
                            />
                            {choice}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default MultipleChoiceQuestion;