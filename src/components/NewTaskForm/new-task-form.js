import React  from "react";

const NewTaskForm = ({addTask}) => {

   return (
      <form onSubmit={addTask} >
         <input  name="taskInput" className="new-todo" placeholder="What needs to be done?" autoFocus />
      </form>
   )
};

export default NewTaskForm;