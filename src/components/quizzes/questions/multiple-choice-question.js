import React from "react";

const MultipleChoiceQuestion = ({
                                    question,
                                    answer,
                                    setAnswer,
                                    submitted,
                                    setSubmitted}) => {

    return(
        <ul class="list-group">
            {
                question.choices.map((choice, idx) => {
                    return(
                        <li className={`
                            list-group-item
                            ${(submitted !== null && submitted === choice) ? "selected" : ""}
                            ${(question.correct === choice && submitted !== null) ? "correct" : ""}                            
                            `}
                            key={idx}>
                            <input type="radio"
                                   name={question._id}
                                   value={choice}
                                   onClick={() => {
                                       setAnswer(choice)
                                       question.answer = answer
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