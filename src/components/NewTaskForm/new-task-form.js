import React, { useState }  from "react";

const NewTaskForm = ({addTask}) => {

   const [valueInput, setValueInput] = useState('');

   const onLabelChange = (e) => {
      setValueInput(e.target.value);
      
   };

   const onSubmit = (e) => {
      e.preventDefault();
      if(valueInput.trim()) {
         addTask(valueInput);
         e.target.reset();
      }
   }
   
   return (
      <form onSubmit={onSubmit} >
         <input onChange={onLabelChange} className="new-todo" placeholder="What needs to be done?" autoFocus />
      </form>
   )
};

export default NewTaskForm;