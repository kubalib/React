import React  from "react";

const Task = ({id, label, onDeleted, isCompleted, isEditing, onCompletedClick, onEditingClick}) => {

  
  return (
   <>
    <div className="view" >
      <input id={`toggle-${id}`}  className="toggle" type="checkbox" onChange={onCompletedClick} />
      <label  htmlFor={`toggle-${id}`} >
         <span className="description" >{label}</span>
      </label>
      <button className="icon icon-edit" onClick={onEditingClick} ></button>
      <button className="icon icon-destroy" onClick={onDeleted}></button>
    </div>
    {isEditing && <input className="edit" type="text" defaultValue={label}  /> } 
    </>
  );
};

export default Task;
