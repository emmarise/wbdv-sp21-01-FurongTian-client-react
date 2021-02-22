const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001373951/courses"

const findAllCourses = () =>
    fetch(COURSES_URL)
        .then(response => response.json())

const deleteCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

const createCourse = (course) =>
    fetch(COURSES_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const updateCourse = (courseId, course) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const findCourseById = (courseId) => {
    return fetch(`${COURSES_URL}/${courseId}`, {
        method : "GET"
    }).then(res => res.json())
}

export default {
    findAllCourses:findAllCourses,
    deleteCourse: deleteCourse,
    createCourse:createCourse,
    updateCourse: updateCourse
}