import React from "react";

const TasksFilter = () => {
  return (
    <ul className="filters">
      <li>
        <button class="selected">All</button>
      </li>
      <li>
        <button>Active</button>
      </li>
      <li>
        <button>Completed</button>
      </li>
    </ul>
  );
};

export default TasksFilter;