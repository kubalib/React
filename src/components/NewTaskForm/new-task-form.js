import React, { useState } from "react";
import PropTypes from "prop-types";

const NewTaskForm = ({ addTask = () => {} }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTask(value);
      e.target.reset();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        className="new-todo"
        placeholder="What needs to be done?"
      />
    </form>
  );
};

NewTaskForm.propTypes = {
  addTask: PropTypes.func,
};

export default NewTaskForm;
