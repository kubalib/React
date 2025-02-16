import React, { useState, useEffect } from "react";

import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList";
import Footer from "../Footer";

const createTodo = (label) => ({
  label,
  isCompleted: false,
  isEditing: false,
  timeOfCreation: new Date(),
  isTiming : false,
  duration: 0,
  id: `${Date.now()}-${Math.random()}`,
});

const App = () => {
  const [todos, setTodos] = useState([
    createTodo("Completed task"),
    createTodo("Editing task"),
    createTodo("Active task"),
  ]);

  const [filterState, setFilter] = useState("all");

  useEffect(() => {
    const activeTimers = todos.filter((task) => task.isTiming && !task.isCompleted);
  
    if (activeTimers.length === 0) return; 
  
    const interval = setInterval(() => {
      setTodos((prevTodos) =>
        prevTodos.map((task) =>
          task.isTiming && !task.isCompleted
            ? { ...task, duration: task.duration + 1 }
            : task
        )
      );
    }, 1000);
  
    return () => clearInterval(interval);
  }, [todos]);
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTodos((prevState) => 
  //       prevState.map((task) => {
  //         if (task.isTiming  && !task.isCompleted) {
  //           return { ...task, duration: task.duration + 1 };
  //         }
  //         return task;
  //       })
  //     )
  //   }, 1000);
    
  //   return () => clearInterval(interval);
  // }, []);

  const filteredTodos = () => {
    switch (filterState) {
      case "active":
        return todos.filter((el) => !el.isCompleted);
      case "completed":
        return todos.filter((el) => el.isCompleted);

      default:
        return todos;
    }
  };

  const completedFilter = () => setFilter("completed");
  const activeFilter = () => setFilter("active");
  const allFilter = () => setFilter("all");

  const addTask = (label) => {
    setTodos((prevState) => [...prevState, createTodo(label)]);
  };

  const toggleProperty = (id, propsName) => {
    setTodos((prevState) =>
      prevState.map((el) =>
        el.id === id
          ? { ...el, [propsName]: !el[propsName] }
          : {
              ...el,
              isEditing: propsName === "isEditing" ? false : el.isEditing,
            },
      ),
    );
  };

  const onCompletedClick = (id) =>  toggleProperty(id, "isCompleted");
  const onEditingClick = (id) => toggleProperty(id, "isEditing");

  const toggleTimer = (id , isTiming ) => {
    setTodos((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, isTiming } : task
      )
    );
  };

  const startTimer = (id) => toggleTimer(id, true );
  const pauseTimer = (id) => toggleTimer(id, false); 


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
        <NewTaskForm addTask={addTask} />
      </header>
      <section className="main">
        <TaskList
          todos={filteredTodos()}
          onDeleted={deleteTask}
          onCompletedClick={onCompletedClick}
          onEditingClick={onEditingClick}
          startTimer={startTimer}
          pauseTimer={pauseTimer}
        />
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
