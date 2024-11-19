import React from "react";
import Task from "../task";

const TaskList = ( {todos} ) => {

   const elements = todos.map((el) => {
      console.log(el);
      const liClass = `${el.completed ? "completed" : ""} ${el.editing ? "editing" : ""}`;

      return (
        <li key={el.id} className={liClass}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>
              <Task label={el.label} />
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
          </div>
          {el.editing ? <input className="edit" type="text" value={el.label} /> : null} 
        </li>
      );
   });
      

   return (
      <ul className="todo-list">
         {elements}
      </ul>
   );
};

export default TaskList;