import React from "react";


import NewTaskForm from '../new-task-form';
import TaskList from "../task-list";
import Footer from "../footer";

const App = () => {

   const todos = [
      {label: 'Completed task', completed: true, editing: false, id: 1},
      {label: 'Editing task', completed: false, editing: true, id: 2},
      {label: 'Active task', completed: false, editing: false, id: 3},
   ];

   return (
      <section className="todoapp">
         <header className="header">
            <h1>todos</h1>
            <NewTaskForm />
         </header>
         <section className="main">
            <TaskList todos={todos} />
            <Footer />
         </section>
      </section>
   );
};

export default App;