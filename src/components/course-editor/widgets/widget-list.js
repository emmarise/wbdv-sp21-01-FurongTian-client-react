import React, {useEffect, useState} from 'react'
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import widgetService from "../../../services/widget-service";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = (
    {
        widgets=[],
        findWidgetsForTopic,
        createWidgetForTopic,
        updateWidget,
        deleteWidget,
        resetWidgets
        // clear
    }) => {

    const HEADING = "HEADING";
    const PARAGRAPH = "PARAGRAPH";
    const LIST = "LIST";
    const IMAGE = "IMAGE"

    const {layout, topicId, widgetId} = useParams();
    const [editingWidget, setEditingWidget] = useState({});
    // const [widgets, setWidgets] = useState([]);

    // useEffect(() => {
    //     if (topicId !== "undefined" && typeof topicId !== "undefined") {
    //         clear().then(() => findWidgetsForTopic(topicId))
    //     }
    // }, [topicId])

    useEffect(() => {
        if (topicId !== "undefined" && typeof topicId !== "undefined")
            findWidgetsForTopic(topicId);
        else
            resetWidgets([]);
    }, [topicId]);


    return(
        <div>
            <i onClick={() => createWidgetForTopic(topicId)} className="fas fa-plus fa-2x float-right"></i>
            <h2>Widget List ({widgets.length}) </h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {/*{*/}
                            {/*    editingWidget.id === widget.id &&*/}
                            {/*    <>*/}
                            {/*        <i onClick={() => {*/}
                            {/*            updateWidget(widget)*/}
                            {/*            setEditingWidget({})*/}
                            {/*        }}*/}
                            {/*           className="fas fa-2x fa-check float-right"></i>*/}
                            {/*        <i onClick={() => deleteWidget(widget)}*/}
                            {/*           className="fas fa-2x fa-trash float-right"></i>*/}
                            {/*    </>*/}
                            {/*}*/}
                            {/*{*/}
                            {/*    editingWidget.id !== widget.id &&*/}
                            {/*    <i onClick={() => setEditingWidget(widget)}*/}
                            {/*       className="fas fa-2x fa-cog float-right"></i>*/}
                            {/*}*/}

                            {
                                widget.type === HEADING &&
                                <HeadingWidget
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    widget={widget}/>
                            }
                            {
                                widget.type === PARAGRAPH &&
                                <ParagraphWidget
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    widget={widget}/>
                            }
                            {
                                widget.type === LIST &&
                                <ListWidget
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    widget={widget}/>
                            }
                            {
                                widget.type === IMAGE &&
                                <ImageWidget
                                    updateWidget={updateWidget}
                                    deleteWidget={deleteWidget}
                                    widget={widget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => ({
    createWidgetForTopic: (topicId) => {
        if (topicId !== "undefined" && typeof topicId !== "undefined") {
            widgetService
                .createWidgetForTopic(topicId, {type: "HEADING", size: 1, text: "New Widget"})
                .then(widget => dispatch({
                    type: "CREATE_WIDGET",
                    widget
                }))
        } else {
            alert("Please select a topic");
        }
    },
    deleteWidget: (item) => {
        widgetService.deleteWidget(item.id)
            .then(status =>
                dispatch({
                type: "DELETE_WIDGET",
                widgetToDelete: item
                }))
    },
    updateWidget: (widget) => {
        widgetService.updateWidget(widget.id, widget)
            .then(status => dispatch({
                type: "UPDATE_WIDGET",
                widget
            }))
    },
    clear: () => {
        dispatch({
            type: "CLEAR_WIDGET"
        })
        return Promise.resolve()
    },
    findWidgetsForTopic: (topicId) => {
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => {
                dispatch({
                    type: "FIND_WIDGETS",
                    widgets
                });
            });
    },
    resetWidgets : (widgets) => {
        dispatch({
            type : "FIND_WIDGETS",
            widgets
        });
    }
})

export default connect(stpm, dtpm)(WidgetList)