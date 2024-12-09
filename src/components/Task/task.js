import React from "react";

import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import PropTypes from "prop-types";

const Task = ({
  id = 0,
  label = "Default Task",
  onDeleted,
  isEditing = false,
  isCompleted = false,
  created = new Date(),
  onCompletedClick,
  onEditingClick,
}) => {
  return (
    <>
      <div className="view">
        <input
          id={`toggle-${id}`}
          checked={isCompleted}
          className="toggle"
          type="checkbox"
          onChange={onCompletedClick}
        />
        <label htmlFor={`toggle-${id}`}>
          <span className="description">{label}</span>
          <span className="created">{`созданно ${formatDistanceToNow(created, { addSuffix: true, locale: ru })}`}</span>
        </label>
        <button
          type="button"
          aria-label="Editing Task"
          className="icon icon-edit"
          onClick={onEditingClick}
        />
        <button
          type="button"
          aria-label="Delete Task"
          className="icon icon-destroy"
          onClick={onDeleted}
        />
      </div>
      {isEditing && <input className="edit" type="text" defaultValue={label} />}
    </>
  );
};

Task.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  isEditing: PropTypes.bool,
  isCompleted: PropTypes.bool,
  onDeleted: PropTypes.func,
  onCompletedClick: PropTypes.func,
  onEditingClick: PropTypes.func,
  created: PropTypes.instanceOf(Date),
};

export default Task;
