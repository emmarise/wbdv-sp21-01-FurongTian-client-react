import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import QuestionService from "../../services/question-service";

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);

    // on load
    useEffect(() => {
        if (courseId !== "undefined" && typeof courseId !== "undefined") {
            QuestionService.findQuestionsForQuiz(quizId)
                .then(q => setQuestions(q))
        }
    }, [courseId, quizId]);

    return(
        <div>
            <h2>Quiz {quizId}</h2>
            <ul class="list-group">
                {
                    questions.map(question =>
                        <li class="list-group-item"
                            key={question._id}>
                            <Question question={question} quizId={quizId}/>
                        </li>
                    )
                }
            </ul>
            <br/>
        </div>
    );
}

export default Quiz;