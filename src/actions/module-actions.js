import moduleService from "../services/module-service";

export const CREATE_MODULE = "CREATE_MODULE"
export const DELETE_MODULE = "DELETE_MODULE"
export const UPDATE_MODULE = "UPDATE_MODULE"
export const CLEAR_LESSONS = "CLEAR_LESSONS"
export const CLEAR_TOPICS = "CLEAR_TOPICS"
export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE"

export const createModule = (dispatch, courseId) => {
  if (courseId !== "undefined" && typeof courseId !== "undefined") {
    moduleService.createModule(courseId, {title: "New Module"})
    .then(theActualModule => dispatch({
      type: CREATE_MODULE,
      module: theActualModule
    }))
  } else {
    alert("Please select a course")
  }
}

export const deleteModule = (dispatch, item) =>
  moduleService.deleteModule(item._id)
  .then(status => dispatch({
    type: DELETE_MODULE,
    moduleToDelete: item
}))

export const updateModule = (dispatch, module) =>
  moduleService.updateModule(module._id, module)
  .then(status => dispatch({
    type: UPDATE_MODULE,
    module
  }))

export const clear = (dispatch) => {
  dispatch({
    type: CLEAR_LESSONS
  })
  dispatch({
    type: CLEAR_TOPICS
  })
  return Promise.resolve()
}

export const findModulesForCourse = (dispatch, courseId) => {
  // alert(courseId);
  moduleService.findModulesForCourse(courseId)
  .then(theModules => {
    dispatch({
      type: FIND_MODULES_FOR_COURSE,
      modules: theModules
    })
  })
}

const moduleActions = {
  createModule,
  deleteModule,
  updateModule,
  clear,
  findModulesForCourse
}

export default moduleActions;