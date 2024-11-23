import React from "react";

import Task from "../Task";

const TaskList = ({ todos, onDeleted }) => {

  const elements = todos.map((item) => {
    const { id, label } = item;

    return (
      <li key={id}>
        <Task id={id} label={label} onDeleted={() => onDeleted(id)} />
      </li>
    );
  });

  return (
    <ul className="todo-list">{elements}</ul>
    
  );
};

export default TaskList;
