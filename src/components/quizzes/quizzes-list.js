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
    }, [courseId])
    return(
        <div>
            <h2>Quizzes</h2>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <div className="list-group-item"
                                key={quiz._id}>
                                <Link
                                    to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    {quiz.title}
                                </Link>
                                <br></br>
                                <Link
                                    to={`/courses/${courseId}/quizzes/${quiz._id}/attempts`}
                                >
                                    Attempts
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuizzesList;