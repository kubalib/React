import React from "react";
import classNames from "classnames";


const TasksFilter = ({filter, completedFilter, activeFilter, allFilter}) => {

  return (
    <ul className="filters">
      <li>
        <button className={classNames({selected: filter === 'all' })} onClick={allFilter}>All</button>
      </li>
      <li>
        <button className={classNames({selected: filter === 'active' })} onClick={activeFilter}>Active</button>
      </li>
      <li>
        <button className={classNames({selected: filter === 'completed' })} onClick={completedFilter}>Completed</button>
      </li>
    </ul>
  );
};

export default TasksFilter;