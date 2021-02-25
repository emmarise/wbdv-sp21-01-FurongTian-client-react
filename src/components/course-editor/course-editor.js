import React from 'react'
import {useHistory, Link} from "react-router-dom";

const CourseEditor = (props) => {
    let history = useHistory();
    return(<div>
        {/*{JSON.stringify(props)}*/}

        <div className="container">

            <div className="row">
                <div className="col-4">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <button className="btn" onClick={() => history.goBack()}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link disabled">CS5610 - WebDev</Link>
                        </li>
                    </ul>
                </div>

                <div className="col-8">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link to='/' className="nav-link" href="#">Build</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link active" href="#">Pages</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link" href="#">Theme</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link" href="#">Store</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link" href="#">Apps</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link" href="#">Settings</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link" href="#">
                                <i className="fas fa-plus"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <br/>

            <div className="row">
                <div className="col-4">
                    <ul className="list-group">
                        <li className="list-group-item">
                            Module 1 - jQuery
                            <i className="fas fa-times float-right"></i>
                        </li>
                        <li className="list-group-item active">
                            Module 2 - React
                            <i className="fas fa-times float-right"></i>
                        </li>
                        <li className="list-group-item">
                            Module 3 - Redux
                            <i className="fas fa-times float-right"></i>
                        </li>
                        <li className="list-group-item">
                            Module 4 - Native
                            <i className="fas fa-times float-right"></i>
                        </li>
                        <li className="list-group-item">
                            Module 5 - Angular
                            <i className="fas fa-times float-right"></i>
                        </li>
                        <li className="list-group-item">
                            Module 6 - Node
                            <i className="fas fa-times float-right"></i>
                        </li>
                        <li className="list-group-item">
                            Module 7 - Mongo
                            <i className="fas fa-times float-right"></i>
                        </li>
                        <li className="list-group-item">
                            <i className="fas fa-plus float-right"></i>
                        </li>

                    </ul>
                </div>

                <div className="col-8">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link to='/' className="nav-link" href="#">Topic 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link active" href="#">Topic 2</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link" href="#">Topic 3</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link" href="#">Topic 4</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-link" href="#">
                                <i className="fas fa-plus"></i>
                            </Link>
                        </li>
                    </ul>

                    <br/>
                    <div>
                        Content intentionally left blank
                    </div>
                </div>
            </div>
        </div>

    </div>)
}

export default CourseEditor