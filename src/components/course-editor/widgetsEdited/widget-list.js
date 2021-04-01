import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import ParagraphWidget from "./paragraph-widget";
import HeadingWidget from "./heading-widget";
import {useParams} from "react-router-dom";
import widgetActions from "../../actions/widget-actions";
 
const WidgetList = ({
    widgets = [],
    updateWidget,
    deleteWidget,
    createWidget,
    findWidgetsForTopic,
    resetWidgets
}) => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();

    useEffect(() => {
        if (topicId !== "undefined" && typeof topicId !== "undefined")
            findWidgetsForTopic(topicId);
        else
            resetWidgets([]);
    }, [topicId]);

    useEffect(() => {
        if (topicId !== "undefined" && typeof topicId !== "undefined")
            findWidgetsForTopic(topicId);
        else
            resetWidgets([]);
    }, [lessonId]);

    return (<div className="widget-module">
            <div className="row justify-content-end">
                <div className="col-1">
                    <i className="btn btn-outline-dark fas fa-plus float-right"
                        onClick = {() => {createWidget(topicId)}}></i>
                </div>
            </div>
            <ul className="list-group">
                {
                    widgets.map(w => {
                        return <li className="list-group-item" key={w.id}>
                        {
                            w["type"] === "Paragraph" &&
                                <ParagraphWidget widget={w}
                                                 updateWidget={updateWidget}
                                                 deleteWidget={deleteWidget} />
                        }
                        {   
                            
                            w["type"] === "Heading" &&
                                <HeadingWidget widget={w}
                                               updateWidget={updateWidget}
                                               deleteWidget={deleteWidget} />
                        }
                        
                        </li>
                    })
                }
                
            </ul>
        </div>)
};

const stpm = (state) => ({
    widgets : state.widgetReducer.widgets
})

const dtpm = (dispatch) => ({
    findWidgetsForTopic : (topicId) => widgetActions.findWidgetsForTopic(dispatch, topicId),
    updateWidget : (widget) => widgetActions.updateWidget(dispatch, widget),
    deleteWidget : (widget) => widgetActions.deleteWidget(dispatch, widget),
    createWidget : (topicId) => {
        console.log(`Hi~ ${topicId}`);
        if (topicId !== "undefined" && typeof topicId !== "undefined") {
            widgetActions.createWidget(dispatch, topicId);
        } else {
            alert("Please select a topic");
        }
    },
    resetWidgets : () => widgetActions.resetWidgets(dispatch)
})

export default connect(stpm, dtpm)(WidgetList);