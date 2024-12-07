import React, {useState} from "react";


import NewTaskForm from '../NewTaskForm';
import TaskList from "../TaskList";
import Footer from "../Footer";

const App = () => {

   const createTodo = (label) => {
      return {
         label: label,
         isCompleted: false,
         isEditing: false,
         timeOfCreation: new Date(), 
         id: `${Date.now()}-${Math.random()}`
      }
   };

   const [todos, setTodos] = useState([
      createTodo('Completed task'),
      createTodo('Editing task'),
      createTodo('Active task')
   ]);

   const [filterState, setFilter] = useState('all');
   

   const filteredTodos = () => {
      switch(filterState) {
         case "active":
            return todos.filter((el) => !el.isCompleted);
         case "completed" :
            return todos.filter((el) => el.isCompleted);

         default : 
            return todos;
      };
   };

   const completedFilter = () => setFilter('completed');
   const activeFilter = () => setFilter('active');
   const allFilter = () => setFilter('all');


   const addTask = (label) => {
      setTodos((prevState) => [...prevState, createTodo(label)])
   };
   

   // const onCompletedClick = (id) => {
   //    setTodos((prevState) => 
   //       prevState.map((el) => el.id === id ? {...el, isCompleted: !el.isCompleted} : el)
   //    );
   //  };

   // const onEditingClick = (id) => {
   //    setTodos((prevState) => 
   //       prevState.map((el) => el.id === id ? {...el, isEditing: !el.isEditing} : {...el, isEditing: false}))
   //  };

   const toggleProperty = (id , propsName) => {
      setTodos((prevState) => prevState.map((el) => el.id === id ? {...el, [propsName]: !el[propsName]} : {...el, isEditing: propsName === "isEditing" ? false : el.isEditing}))
   };

   const onCompletedClick = (id) => toggleProperty(id, 'isCompleted');
   const onEditingClick = (id) => toggleProperty(id, 'isEditing');


   const deleteTask = (id) => {
      setTodos((prevState) => prevState.filter((el) => el.id !== id));
   };


   const clearCompleted = () => {
      setTodos((prevState) => prevState.filter((el) => !el.isCompleted));
   };

   const completedCount = todos.filter((el) => el.isCompleted).length;
   const activeTasks = todos.length - completedCount;


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
            todos={filteredTodos()}  
            onDeleted={deleteTask}
            onCompletedClick={onCompletedClick} 
            onEditingClick={onEditingClick}/>
            <Footer 
            activeTasks={activeTasks} 
            completedFilter={completedFilter}
            activeFilter={activeFilter}
            allFilter={allFilter}
            filterState={filterState}
            clearCompleted={clearCompleted}
             />
         </section>
      </section>
   );
};

export default App;