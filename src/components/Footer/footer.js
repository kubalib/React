import React from "react";
import TasksFilter from "../TasksFilter";

const Footer = ({activeTask, completedFilter, activeFilter, allFilter, filter,clearCompleted}) => {
   return (
      <footer className="footer">
         <span className="todo-count">{activeTask} items left</span>
         <TasksFilter
         completedFilter={completedFilter}
         activeFilter={activeFilter}
         allFilter={allFilter}
         filter={filter} />
         <button onClick={clearCompleted} className="clear-completed">Clear completed</button>
      </footer>
   );
};

export default Footer;