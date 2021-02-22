import React from 'react'
import {Link} from "react-router-dom";

// const CourseEditor = ({props}) =>
const CourseEditor = ({history}) =>
    <div>
        {/*<i onClick={() => history.goBack()}*/}
        {/*   className="fas fa-times float-right"></i>*/}

        <div className="container-fluid">

            <div className="row">
                <div className="col-4">
                    <ul className="nav nav-tabs">
                        <Link className="nav-item">
                            <i onClick={() => history.goBack()}
                               className="fas fa-times"></i>
                        </Link>
                        <Link className="nav-item">
                            <a className="nav-link disabled">CS5610 - WebDev</a>
                        </Link>
                    </ul>
                </div>

                <div className="col-8">
                    <ul className="nav nav-tabs">
                        <Link className="nav-item">
                            <a className="nav-link" href="#">Build</a>
                        </Link>
                        <Link className="nav-item">
                            <a className="nav-link active" href="#">Pages</a>
                        </Link>
                        <Link className="nav-item">
                            <a className="nav-link" href="#">Theme</a>
                        </Link>
                        <Link className="nav-item">
                            <a className="nav-link" href="#">Store</a>
                        </Link>
                        <Link className="nav-item">
                            <a className="nav-link" href="#">Apps</a>
                        </Link>
                        <Link className="nav-item">
                            <a className="nav-link" href="#">Settings</a>
                        </Link>
                        <Link className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fas fa-plus"></i>
                            </a>
                         </Link>
                    </ul>
                </div>
            </div>

            <br/>

            <div className="row">
                <div className="col-4">
                    <ul className="list-group">
                        <Link className="list-group-item">
                            Module 1 - jQuery
                            <i className="fas fa-times float-right"></i>
                        </Link>
                        <Link className="list-group-item active">
                            Module 2 - React
                            <i className="fas fa-times float-right"></i>
                        </Link>
                        <Link className="list-group-item">
                            Module 3 - Redux
                            <i className="fas fa-times float-right"></i>
                        </Link>
                        <Link className="list-group-item">
                            Module 4 - Native
                            <i className="fas fa-times float-right"></i>
                        </Link>
                        <Link className="list-group-item">
                            Module 5 - Angular
                            <i className="fas fa-times float-right"></i>
                        </Link>
                        <Link className="list-group-item">
                            Module 6 - Node
                            <i className="fas fa-times float-right"></i>
                        </Link>
                        <Link className="list-group-item">
                            Module 7 - Mongo
                            <i className="fas fa-times float-right"></i>
                        </Link>
                        <Link className="list-group-item">
                            <i className="fas fa-plus float-right"></i>
                        </Link>

                    </ul>
                </div>

                <div className="col-8">
                    <ul className="nav nav-pills">
                        <Link className="nav-item">
                            <a className="nav-link" href="#">Topic 1</a>
                        </Link>
                        <Link className="nav-item">
                            <a className="nav-link active" href="#">Topic 2</a>
                        </Link>
                        <Link className="nav-item">
                            <a className="nav-link" href="#">Topic 3</a>
                        </Link>
                        <Link className="nav-item">
                            <a className="nav-link" href="#">Topic 4</a>
                        </Link>
                        <Link className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fas fa-plus"></i>
                            </a>
                        </Link>
                    </ul>

                    <br/>
                    <div>
                        Content intentionally left blank
                    </div>
                </div>
            </div>
        </div>
    </div>

export default CourseEditor