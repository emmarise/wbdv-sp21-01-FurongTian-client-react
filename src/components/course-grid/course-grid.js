import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = (props) =>
    <div>
        <div className="row justify-content-end">
            <div className="col-4 align-self-center d-none d-md-block">
                Recent Courses
            </div>
            <div className="col-4 align-self-center d-none d-md-block">
                Owned by me
                <i className="fas fa-2x fa-sort-down"></i>
            </div>
            <div className="col-auto align-self-center">
                <button type="button" className="btn">
                    <i className="fas fa-2x fa-folder"></i>
                </button>
                <button type="button" className="btn">
                    <i className="fas fa-2x fa-sort-alpha-down"></i>
                </button>
                <button type="button" className="btn">
                    <Link to="/courses/table">
                        <i className="fas fa-list fa-2x"></i>
                    </Link>
                </button>
            </div>
        </div>


        <div className="row">
            {
                props.courses.reverse().map((course) => <CourseCard key={course._id}
                                             course={course}
                                             deleteCourse={props.deleteCourse}
                                             updateCourse={props.updateCourse} />
                )
            }
        </div>
    </div>

export default CourseGrid