import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Task from "../Task";


const TaskList = ({ 
  todos = [], 
  onDeleted = () => console.log('onDeleted отсутствует'), onCompletedClick = () => console.log('onCompletedClick отсутствует'), 
  onEditingClick = () => console.log('onEditingClick отсутствует') }) => {  

  const elements = todos.map((item) => {
    const { id, label, isCompleted, isEditing, timeOfCreation } = item;

    const liClass = classNames( {
      completed: isCompleted,
      editing: isEditing
    });

    return (
      <li key={id} className={liClass}>
        <Task 
        id={id} 
        label={label} 
        created={timeOfCreation}
        onDeleted={() => onDeleted(id)}
        onCompletedClick={() => onCompletedClick(id)}
        onEditingClick={() => onEditingClick(id)} 
        isEditing={isEditing} 
        isCompleted={isCompleted}
        />
      </li>
    );
  });

  return (
    <ul className="todo-list">{elements}</ul>
  );
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onDeleted: PropTypes.func,
  onCompletedClick: PropTypes.func,
  onEditingClick: PropTypes.func
};

// TaskList.defaultProps = {
//   todos: [],
//   onDeleted: () => console.log('onDeleted отсутствует'),
//   onCompletedClick: () => console.log('onCompletedClick отсутствует'),
//   onEditingClick: () => console.log('onEditingClick отсутствует')
// };

export default TaskList;
