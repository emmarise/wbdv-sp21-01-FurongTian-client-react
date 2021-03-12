import React, {useState} from 'react'
// import "./course-editor/course-editor.style.client.css";
import {Link} from "react-router-dom"

const EditableItem = ({
    to,
    item,
    updateItem,
    deleteItem,
    active
}) => {
    const [editing, setEditing] = useState(false);
    const [itemCache, setItemCache] = useState(item);

    return (
            <span>
            {
                !editing &&
                <li className={`list-group-item ${active ? 'active' : ''}`}>
                    <Link className="link" to={to}>
                        {item.title}
                    </Link>
                    <button className="btn float-right"
                            onClick={() => setEditing(true)}>
                        <i className="fas fa-edit"></i>
                    </button>
                </li>
            }
            {
                editing &&
                <div className="row">
                    <div className="col-8 align-self-center">
                        <input
                            onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                            value={itemCache.title}/>
                    </div>
                    <div className="col-4">
                        <button className="btn float-right"
                            onClick={() => deleteItem(item)}>
                            <i o className="fas fa-times"
                                style={{
                                color: 'red'
                            }}></i>
                        </button>
                        <button className="btn float-right"
                                onClick={() => {
                                        setEditing(false);
                                        updateItem(itemCache);
                            }}>
                            <i className="fas fa-check" 
                                style={{
                                color: 'green'
                            }}></i>
                        </button>
                    </div>
                </div>
            }
        </span>
    )
}

export default EditableItem