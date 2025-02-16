import React, { useState, useEffect } from "react";

import { formatDistanceToNow, format } from "date-fns";
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
  duration, 
  isTiming,
  startTimer,
  pauseTimer
}) => {
  // const [time, setTime] = useState(duration);

  // useEffect(() => {
  //   setTime(duration);
  // }, [duration]);

  // useEffect(() => {
  //   if (!isTiming || isCompleted) {
  //     return undefined
  //   };

  //   const interval = setInterval(() => {
  //     setTime((prevTime) => prevTime + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [isTiming, isCompleted]);

  
  
  const formatTime = (seconds) => {
    return format(new Date(seconds * 1000), "mm:ss");
  };

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
          <span className="title">{label}</span>
          <span className="description">
              <button type="button" className="icon icon-play" aria-label="play Task" onClick={startTimer} />
              <button type="button" className="icon icon-pause" aria-label="pause Task" onClick={pauseTimer} />
              {formatTime(duration)}
          </span>
          <span className="description">{`созданно ${formatDistanceToNow(created, { addSuffix: true, locale: ru })}`}</span>
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
  duration: PropTypes.number,
  isTiming: PropTypes.bool,
  startTimer: PropTypes.func,
  pauseTimer: PropTypes.func
};

export default Task;
