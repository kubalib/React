import React, {useState} from "react";


import NewTaskForm from '../NewTaskForm';
import TaskList from "../TaskList";
import Footer from "../Footer";

const App = () => {

   const [todos, setTodos] = useState([
      {label: 'Completed task', id: 1},
      {label: 'Editing task', id: 2},
      {label: 'Active task', id: 3},
   ]);

   const deleteTask = (id) => {
      const newTodos = todos.filter((el) => el.id !== id);
      setTodos(newTodos);
   };

   return (
      <section className="todoapp">
         <header className="header">
            <h1>todos</h1>
            <NewTaskForm />
         </header>
         <section className="main">
            <TaskList todos={todos} onDeleted={deleteTask} />
            <Footer />
         </section>
      </section>
   );
};

export default App;