const urlWithTopicId = "https://wbdv-generic-server.herokuapp.com/api/001373951/topics";
// const urlWithWidgetId = "http://localhost:8080/api"
const urlWithWidgetId = process.env.REACT_APP_WIDGET_URL

const WidgetService = {

    createWidgetForTopic: (topicId, widget) => {
        // `${urlWithTopicId}/${topicId}/widgets`
        // http://localhost:8080/api/topics/ABC2/widgets
        return fetch(`${urlWithWidgetId}/topics/${topicId}/widgets`, {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(widget)
        }).then(res => res.json());
    },

    findWidgetsForTopic : (topicId) => {
        // `http://localhost:8080/api/topics/${topicId}/widgets`
        return fetch(`${urlWithWidgetId}/topics/${topicId}/widgets`, {
            method : "GET"
        }).then(res => res.json());
    },

    findWidget: (topicId) => {
        return fetch(`${urlWithTopicId}/${topicId}`, {
            method : "GET"
        }).then(res => res.json());
    },

    updateWidget : (widgetId, widget) => {
        // const urlWithWidgetId = "http://localhost:8080/api"
        return fetch(`${urlWithWidgetId}/widgets/${widgetId}`, {
            method : "PUT",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(widget)
        }).then(res => res.json());
    },

    deleteWidget : (widgetId) => {
        return fetch(`${urlWithWidgetId}/widgets/${widgetId}`, {
            method: "DELETE"
        })
            .then(res => res.json())
    }
}

export default WidgetService;