import React from "react";
import './task.css';

const Task = ( {classStatus, description, created, id}) => {

    const inputField = classStatus === "editing" ? <input type="text" className="edit" value="Editing task" /> : null;
    
    return (
        <li className={classStatus} key={id}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>
                <span className="description">{description}</span>
                <span className="created">{created}</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
          {inputField}
          </li>
    );
}

export default Task;