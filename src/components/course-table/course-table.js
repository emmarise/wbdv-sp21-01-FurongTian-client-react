import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>

                <div className="row justify-content-end">
                    {/*{console.log(this.props.courses)}*/}
                    <div className="col-auto align-self-center">
                        <button type="button" className="btn">
                            <i className="fas fa-2x fa-folder"></i>
                        </button>
                        <button type="button" className="btn">
                            <i className="fas fa-2x fa-sort-alpha-down"></i>
                        </button>
                        <button type="button" className="btn">
                            <Link to="/courses/grid">
                                <i className="fas fa-2x fa-th float-right"></i>
                            </Link>
                        </button>
                    </div>
                </div>

                <table className="table">
                    <tbody>
                    {
// no ndx needed here, strange
                        this.props.courses.map((course) =>
                            <CourseRow
                                key={course._id}
                                course={course}
                                updateCourse={this.props.updateCourse}
                                deleteCourse={this.props.deleteCourse}
                            />)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}