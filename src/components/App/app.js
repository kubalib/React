import React, {useState} from "react";


import NewTaskForm from '../NewTaskForm';
import TaskList from "../TaskList";
import Footer from "../Footer";

const App = () => {

   let minId = 1;


   const createTodo = (label) => {
      return {
         label: label,
         isCompleted: false,
         isEditing: false,
         id: minId++
      }
   };

   const [todos, setTodos] = useState([
      createTodo('Completed task'),
      createTodo('Editing task'),
      createTodo('Active task')
   ]);

   console.log(todos);

   const [filter, setFilter] = useState('all');
   

   const filterTodos = todos.filter((el) => {
      if(filter === "active") return !el.isCompleted;
      if(filter === "completed") return el.isCompleted;
      return true
   });


   const addTask = (label) => {
      setTodos((prevState) => [...prevState, createTodo(label)])
   };
   

   const onCompletedClick = (id) => {
      setTodos((prevState) => 
         prevState.map((el) => el.id === id ? {...el, isCompleted: !el.isCompleted} : el)
      );
    };

    const onEditingClick = (id) => {
      setTodos((prevState) => 
         prevState.map((el) => el.id === id ? {...el, isEditing: !el.isEditing} : {...el, isEditing: false}))
    };

   const deleteTask = (id) => {
      setTodos((prevState) => prevState.filter((el) => el.id !== id));
   };


   const clearCompleted = () => {
      setTodos((prevState) => prevState.filter((el) => !el.isCompleted));
   };

   const completedCount = todos.filter((el) => el.isCompleted === true).length;
   const activeTask = todos.length - completedCount;


   return (
      <section className="todoapp">
         <header className="header">
            <h1>todos</h1>
            <NewTaskForm 
            addTask={addTask}
             />
         </header>
         <section className="main">
            <TaskList 
            todos={filterTodos}  
            onDeleted={deleteTask}
            onCompletedClick={onCompletedClick}
            onEditingClick={onEditingClick} />
            <Footer 
            activeTask={activeTask} 
            completedFilter={() => setFilter('completed')}
            activeFilter={() => setFilter('active')}
            allFilter={() => setFilter('all')}
            filter={filter}
            clearCompleted={clearCompleted}
             />
         </section>
      </section>
   );
};

export default App;