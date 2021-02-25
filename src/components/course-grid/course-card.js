import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = (props) => {
    const [isEditing, setEditing] = useState(false);
    const [courseTitle, setCourseTitle] = useState(props.course.title);

    return ( <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-1 my-3">
        <div className="card">
            <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" alt="Card image cap"></img>
            <div className="card-body">
                {
                    !isEditing &&
                    <Link to="/courses/editor">
                        <h4 className="card-title">{courseTitle}</h4>
                    </Link>
                }
                {
                    isEditing &&
                    <input
                        onChange={(event) => setCourseTitle(event.target.value)}
                        value={courseTitle}
                        id="editedCourseTitle"
                        className="form-control"/>
                }
                <p className="card-text">Some description</p>
                {
                    !isEditing &&
                    <Link to="/courses/editor">
                        <a className="btn mx-1 btn-primary">{courseTitle}</a>
                    </Link>
                }
                {
                    isEditing &&
                    <button  className="btn mx-1 btn-primary" disabled>{courseTitle}
                    </button>
                }
                <i onClick={() => props.deleteCourse(props.course)} className="fas fa-trash"></i>
                {
                    !isEditing &&
                    <button className="btn" onClick={() => setEditing(true)}>
                        <i className="fas fa-edit"></i>
                    </button>
                }
                {
                    isEditing &&
                    <button className="btn" onClick={() => {
                        const newCourse = {
                            ...props.course,
                            title: courseTitle
                        }
                        props.updateCourse(newCourse);
                        // 很重要！！
                        setEditing(false);
                    }} >
                        <i class="fas fa-check" style={{
                            color: 'green'
                        }}></i>
                    </button>
                }
                {
                    isEditing &&
                    <button className="btn" onClick={() => {
                        // 很重要！！
                        setEditing(false);
                    }}>
                        <i className="fas fa-times"  style={{
                            color: 'red'
                        }}></i>
                    </button>
                }
            </div>
        </div>
    </div>)
}


export default CourseCard