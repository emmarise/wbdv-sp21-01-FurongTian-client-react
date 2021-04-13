import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import QuizService from "../../services/quizzes-service";


const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        // // TODO: implement this in a separate service file
        // fetch("http://localhost:3000/api/quizzes")
        //     .then(response => response.json())
        //     .then((quizzes) => {
        //         setQuizzes(quizzes)
        //     })
        if (courseId !== "undefined" && typeof courseId !== "undefined") {
            QuizService.findAllQuizzes()
                .then(q => setQuizzes(q))
        }
    }, [])
    return(
        <div>
            <h2>Quizzes</h2>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <Link
                                to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                className="list-group-item">
                                {quiz.title}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuizzesList;