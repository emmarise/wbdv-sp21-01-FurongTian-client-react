const initialState = {
    widgets : []
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FIND_WIDGETS":
            return {
                ...state,
                widgets : action.widgets
            }
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets : [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets : state.widgets.filter(
                    w => (w.id !== action.widgetToDelete.id)
                )
            }
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets : state.widgets.map(w => ((w.id === action.widget.id) ? action.widget : w))
            }
        case "CLEAR_WIDGET":
            return {
                ...state,
                widgets: []
            }
        default:
            return state;
    }
}

export default widgetReducer;