import React, {useState} from "react";
import classNames from "classnames";

const Task = ({id, label, onDeleted}) => {

  const [isCompleted, setCompleted] = useState(false);
  const [isEditing, setEditing] = useState(false);

  const onCompletedClick = () => {
    setCompleted( (prevState) => !prevState );
  };


  const liClass = classNames( {
    completed: isCompleted,
    editing: isEditing
  });

  return (
   <>
    <div className="view" >
      <input id={`toggle-${id}`}  className="toggle" type="checkbox"  />
      <label className={liClass} htmlFor={`toggle-${id}`} onClick={onCompletedClick} >
         <span className="description">{label}</span>
      </label>
      <button className="icon icon-edit" ></button>
      <button className="icon icon-destroy" onClick={onDeleted}></button>
    </div>
    {isEditing && <input className="edit" type="text" defaultValue={label}  /> } 
    </>
  );
};

export default Task;
