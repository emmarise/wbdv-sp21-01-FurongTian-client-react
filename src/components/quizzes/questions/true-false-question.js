import React, {useState} from "react";

const TrueFalseQuestion = ({
                               question,
                               answer,
                               setAnswer,
                               graded,
                               setGraded,
                               submitted}) => {

    return (
        <ul className="list-group">
            <li className={`list-group-item
                                ${(submitted !== undefined && submitted === "true") ? "selected" : ""}
                                ${(question.correct === "true" && submitted !== undefined) ? "correct" : ""}
                                `}>
                <input
                    type="radio"
                    onClick={() => {
                        setAnswer("true")
                        question.answer = "true"
                    }}
                    name={question._id}
                    value="true"/>
                True
            </li>
            <li className={`list-group-item 
                                ${(submitted !== undefined && submitted === "false") ? "selected" : ""}
                                ${(question.correct === "false" && submitted !== undefined) ? "correct" : ""}
                                `}>
                <input
                    type="radio"
                    onClick={() => {
                        setAnswer("false")
                        question.answer = "false"
                    }}
                    name={question._id}
                    value="false"/>
                False
            </li>
        </ul>
    )
}

export default TrueFalseQuestion;