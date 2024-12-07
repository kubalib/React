import React from "react";
import TasksFilter from "../TasksFilter";
import PropTypes from "prop-types";

const Footer = ({
   activeTasks = 0, 
   completedFilter = () => console.log('completedFilter отсутствует'), 
   activeFilter = () => console.log('activeFilter отсутствует'), allFilter = () => console.log('allFilter отсутствует'), filterState = 'all', 
   clearCompleted = () => console.log('clearCompleted отсутствует')}) => {
   return (
      <footer className="footer">
         <span className="todo-count">{activeTasks} items left</span>
         <TasksFilter
         completedFilter={completedFilter}
         activeFilter={activeFilter}
         allFilter={allFilter}
         filterState={filterState} />
         <button onClick={clearCompleted} className="clear-completed">Clear completed</button>
      </footer>
   );
};

Footer.propTypes = {
   activeTasks: PropTypes.number,
   completedFilter: PropTypes.func,
   activeFilter: PropTypes.func,
   allFilter: PropTypes.func,
   clearCompleted: PropTypes.func
};

export default Footer;