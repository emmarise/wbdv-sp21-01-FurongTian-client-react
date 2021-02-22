import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";

const CourseGrid = (props) =>
    <div>
        <div className="row justify-content-end">

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
                props.courses.map(c => <CourseCard key={c._id}
                                             course={c}
                                             deleteCourse={props.deleteCourse}
                                             updateCourse={props.updateCourse} />
                )
            }
        </div>
    </div>

export default CourseGrid