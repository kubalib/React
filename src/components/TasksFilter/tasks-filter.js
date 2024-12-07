import React from "react";
import classNames from "classnames";


const TasksFilter = ({filterState, completedFilter, activeFilter, allFilter}) => {

  return (
    <ul className="filters">
      <li>
        <button className={classNames({selected: filterState === 'all' })} onClick={allFilter}>All</button>
      </li>
      <li>
        <button className={classNames({selected: filterState === 'active' })} onClick={activeFilter}>Active</button>
      </li>
      <li>
        <button className={classNames({selected: filterState === 'completed' })} onClick={completedFilter}>Completed</button>
      </li>
    </ul>
  );
};

export default TasksFilter;