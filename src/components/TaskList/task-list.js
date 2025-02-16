import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Task from "../Task";

const TaskList = ({
  todos = [],
  onDeleted = () => {},
  onCompletedClick = () => {},
  onEditingClick = () => {},
  startTimer,
  pauseTimer
}) => {
  const elements = todos.map((item) => {
    const { id, label, isCompleted, isEditing, timeOfCreation, duration, isTiming } = item;

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
          duration={duration}
          isTiming={isTiming}
          startTimer={() => {
            return startTimer(id)
          }}
          pauseTimer={() => {
            return pauseTimer(id)
          }}
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
      duration: PropTypes.number,
      isEditing: PropTypes.bool.isRequired,
      timeOfCreation: PropTypes.instanceOf(Date),
    
    }),
  ),
  onDeleted: PropTypes.func,
  onCompletedClick: PropTypes.func,
  onEditingClick: PropTypes.func,
  startTimer: PropTypes.func,
  pauseTimer: PropTypes.func
};

export default TaskList;
