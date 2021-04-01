import React, {useState, useEffect} from 'react';
import EditingWidget from "../widgets/editing-widget";

const HeadingWidget = ({
    widget,
    updateWidget,
    deleteWidget
}) => {
    const [editting, setEditing] = useState(false);
    const [HeaderTag, setHeaderTag] = useState(`h${widget["size"]}`);

    useEffect(() => {
        setHeaderTag(`h${widget["size"]}`);
    },[widget["size"]]);

    return (<form>
            {
                !editting &&
                <>
                    <div className="row">
                        <div className="col">
                            <HeaderTag>{widget.text}</HeaderTag>
                        </div>
                        <div className="col">
                            <i className="btn btn-outline-dark float-right fas fa-cog" 
                                onClick={() => setEditing(true)}></i>
                        </div>
                    </div>
                </>
            }
            {
                editting &&
                <EditingWidget setEditing={setEditing} widget={widget} updateWidget={updateWidget} deleteWidget={deleteWidget}/>
            }
        </form>)
};

export default HeadingWidget;