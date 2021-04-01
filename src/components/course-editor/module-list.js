import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link, useParams} from "react-router-dom";
import EditableItem from "../editable-item";
import moduleActions from "../../actions/module-actions";


const ModuleList = ({
    modules = [],
    findModulesForCourse,
    updateModule,
    deleteModule,
    createModule,
    active
}) => {
    const {layout, courseId, moduleId} = useParams();
    useEffect(() => {
        findModulesForCourse(courseId);
    }, []);

    return (
        <div className="list">
            {   
                modules.map(m =>
                    <EditableItem
                            to={`/courses/${layout}/edit/${courseId}/modules/${m._id}`}
                            item={m}
                            updateItem={updateModule}
                            deleteItem={deleteModule}
                            active = {m._id === moduleId}
                        />
                )
            }
            <button
                    className="btn btn-primary list-group-item list-group-item-action d-flex justify-content-end"
                    type="button"
                    onClick = {() => {createModule(courseId)}}>
                <i className="fas fa-plus"></i>
            </button>
    </div>
    )
}

const stpm = (state) => {
    return {
        modules : state.moduleReducer.modules
    }
}

const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => moduleActions.createModule(dispatch, courseId),
        deleteModule: (item) => moduleActions.deleteModule(dispatch, item),
        updateModule: (module) => moduleActions.updateModule(dispatch, module),
        clear: () => moduleActions.clear(dispatch),
        findModulesForCourse: (courseId) => moduleActions.findModulesForCourse(dispatch, courseId)
    }
}

export default connect(stpm, dtpm)(ModuleList);