import React, {useState, useEffect} from 'react';
import EditingWidget from "../widgets/editing-widget";

const ParagraphWidget = ({
    widget,
    updateWidget,
    deleteWidget
}) => {
    const [editting, setEditing] = useState(false);

    return (<form>
            {
                !editting &&
                <>
                    <div className="row">
                        <div className="col">
                            {widget.text}
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
                <EditingWidget setEditing={setEditing} widget={widget}
                               updateWidget={updateWidget}
                               deleteWidget={deleteWidget}/>
            }
        </form>)
};

export default ParagraphWidget;