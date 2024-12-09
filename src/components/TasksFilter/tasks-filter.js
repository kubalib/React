import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const TasksFilter = ({
  filterState,
  completedFilter,
  activeFilter,
  allFilter,
}) => {
  return (
    <ul className="filters">
      <li>
        <button
          type="button"
          className={classNames({ selected: filterState === "all" })}
          onClick={allFilter}
        >
          All
        </button>
      </li>
      <li>
        <button
          type="button"
          className={classNames({ selected: filterState === "active" })}
          onClick={activeFilter}
        >
          Active
        </button>
      </li>
      <li>
        <button
          type="button"
          className={classNames({ selected: filterState === "completed" })}
          onClick={completedFilter}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

TasksFilter.propTypes = {
  filterState: PropTypes.string,
  completedFilter: PropTypes.func,
  activeFilter: PropTypes.func,
  allFilter: PropTypes.func,
};
export default TasksFilter;
