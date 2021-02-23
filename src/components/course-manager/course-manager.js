import React from 'react'
import CourseTable from "../course-table/course-table";
import "./course-manager.style.client.css"
import CourseGrid from "../course-grid/course-grid";
import CourseEditor from "../course-editor/course-editor";
import {Route} from "react-router-dom";
import courseService from "../../services/course-service";

class CourseManager extends React.Component {
    state = {
        title: "example title",
        courses: [],
        date: new Date(),
    }

    constructor(props) {
        super(props);

    }


    updateCourse = (course) => {
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)
            })))
    }

    componentDidMount = () =>
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = () => {
        document.getElementById("new-course-title").value=""
        const newCourse = {
            title: this.state.title,
            owner: "ME",
            lastModified: this.state.date.getFullYear() + "/" + this.state.date.getMonth()
                + "/" + this.state.date.getDate()
        }
        courseService.createCourse(newCourse)
            .then(course => this.setState(
                (prevState) => ({
                    ...prevState,
                    courses: [
                        course,
                        ...prevState.courses
                    ]
                })))
        // does not clear the input!!
        // document.getElementById("new-course-title").value=""
    }

    deleteCourse = (course) => {
        // console.log(course)
        // alert("delete course " + course._id)
        courseService.deleteCourse(course._id)
            .then(status => {
                this.setState((prevState) => ({
                    courses: prevState.courses.filter(c => c._id !== course._id)
                }))
            })
    }

    updateInputValue = (evt) => {
        this.setState({
            title: evt.target.value
        });

    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-dark bg-primary justify-content-start fixed-top">
                <span className="navbar-brand w-auto">
                    <button className="btn btn-link btn-sm" type="button">
                        <i className="fas fa-align-justify fa-2x"></i>
                    </button>
                    <span className="d-none d-lg-inline">Course Manager</span>
                </span>
                <span className="input-group w-75">
                    <input type="text"
                           className="mx-2 form-control rounded"
                           placeholder="New Course Title"
                           id="new-course-title"
                           value={this.title}
                           onChange={this.updateInputValue}
                    />
                    <span className="input-group-append">
                        <button className="mx-2 btn btn-danger rounded-circle"
                                onClick={this.addCourse}
                                type="button">
                        <i className="fas fa-plus"></i>
                        </button>
                    </span>
                </span>
                </nav>

                {/*<Link to="/">*/}
                {/*    <i className="fas fa-2x fa-home float-right"></i>*/}
                {/*</Link>*/}
                {/*<h1>Course Manager</h1>*/}
                <div className="wbdv-padding-80px">
                {/*<button onClick={this.addCourse}>Add Course</button>*/}

                {/*two route, use <switch>???*/}
                    <Route path="/courses/table">
                        <CourseTable
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                    </Route>
                    <Route path="/courses/grid">
                        <CourseGrid
                            deleteCourse={this.deleteCourse}
                            updateCourse={this.updateCourse}
                            courses={this.state.courses}/>
                    </Route>

                    <Route path="/courses/editor"
                           render={(props) => <CourseEditor props={props}/>}>
                    </Route>
                </div>
            </div>
        )
    }
}

export default CourseManager