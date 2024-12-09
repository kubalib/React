import React from "react";
import PropTypes from "prop-types";
import TasksFilter from "../TasksFilter";

const Footer = ({
  activeTasks = 0,
  completedFilter = () => {},
  activeFilter = () => {},
  allFilter = () => {},
  filterState = "all",
  clearCompleted = () => {},
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">{activeTasks} items left</span>
      <TasksFilter
        completedFilter={completedFilter}
        activeFilter={activeFilter}
        allFilter={allFilter}
        filterState={filterState}
      />
      <button
        type="button"
        onClick={clearCompleted}
        className="clear-completed"
      >
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  activeTasks: PropTypes.number,
  completedFilter: PropTypes.func,
  activeFilter: PropTypes.func,
  allFilter: PropTypes.func,
  clearCompleted: PropTypes.func,
  filterState: PropTypes.string,
};

export default Footer;
