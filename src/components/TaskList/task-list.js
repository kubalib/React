import React from "react";
import classNames from "classnames";

import Task from "../Task";

const TaskList = ({ todos, onDeleted, onCompletedClick, onEditingClick }) => {  

  const elements = todos.map((item) => {
    const { id, label, isCompleted, isEditing } = item;

    const liClass = classNames( {
      completed: isCompleted,
      editing: isEditing
    });

    return (
      <li key={id} className={liClass}>
        <Task 
        id={id} 
        label={label} 
        onDeleted={() => onDeleted(id)}
        onCompletedClick={() => onCompletedClick(id)}
        onEditingClick={() => onEditingClick(id)} 
        isEditing={isEditing} 
        />
      </li>
    );
  });

  return (
    <ul className="todo-list">{elements}</ul>
    
  );
};

export default TaskList;
