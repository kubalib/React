import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Task from "../Task";

const TaskList = ({
  todos = [],
  onDeleted = () => {},
  onCompletedClick = () => {},
  onEditingClick = () => {},
}) => {
  const elements = todos.map((item) => {
    const { id, label, isCompleted, isEditing, timeOfCreation } = item;

    const liClass = classNames({
      completed: isCompleted,
      editing: isEditing,
    });

    return (
      <li key={id} className={liClass}>
        <Task
          id={id}
          label={label}
          created={timeOfCreation}
          onDeleted={() => {
            return onDeleted(id);
          }}
          onCompletedClick={() => {
            return onCompletedClick(id);
          }}
          onEditingClick={() => {
            return onEditingClick(id);
          }}
          isEditing={isEditing}
          isCompleted={isCompleted}
        />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
      isEditing: PropTypes.bool.isRequired,
      timeOfCreation: PropTypes.instanceOf(Date),
    }),
  ),
  onDeleted: PropTypes.func,
  onCompletedClick: PropTypes.func,
  onEditingClick: PropTypes.func,
};

export default TaskList;
