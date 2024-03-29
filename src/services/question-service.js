// const QUIZZES_URL = 'http://localhost:4000/api/quizzes';
const QUIZZES_URL = 'https://wbdvnodeservermongo.herokuapp.com/api/quizzes';

const QuestionService = {
    findQuestionsForQuiz : (qid) => {
        return fetch(`${QUIZZES_URL}/${qid}/questions`)
            .then(response => response.json())
    }
}

export default QuestionService;