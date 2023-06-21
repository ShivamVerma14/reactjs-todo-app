import { useState, useEffect } from "react";

import Header from "./components/Header";
import Todos from "./components/Todos";
import NewTodoForm from "./components/NewTodoForm";
import UpdateTodoForm from "./components/UpdateTodoForm";
import NoTodoPage from "./components/NoTodoPage";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos !== null) return JSON.parse(savedTodos);
    else return [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [todoToUpdate, setTodoToUpdate] = useState({});
  const [labelToShow, setLabelToShow] = useState(null);
  const [openNewTodoForm, setOpenNewTodoForm] = useState(false);
  const [openUpdateTodoForm, setOpenUpdateTodoForm] = useState(false);

  function filterTodos(event) {
    let label = event.target.textContent;
    setLabelToShow(label);
  }

  function resetFilterTodos() {
    setLabelToShow(null);
  }

  function saveNewTodo(newTodo) {
    setTodos(prevTodos => [...prevTodos, newTodo]);
  }

  function updateTodo() {
    let updatedTodos = [];

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === todoToUpdate.id) {
        updatedTodos.push(todoToUpdate);
      } else {
        updatedTodos.push(todos[i]);
      }
    }

    setTodos(updatedTodos);
  }

  function deleteTodo(id) {
    let updatedTodos = todos.filter(todo => todo.id !== id);

    setTodos(updatedTodos);
  }

  function handleUpdateClick(id) {
    setOpenUpdateTodoForm(!openUpdateTodoForm);
    setTodoToUpdate(todos.filter(todo => todo.id === id)[0]);
  }

  function toggleTodoCompleteStatus(id) {
    let updatedTodos = [];

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
        updatedTodos.push({ ...todos[i], completed: !todos[i].completed });
      } else {
        updatedTodos.push(todos[i]);
      }
    }

    setTodos(updatedTodos);
  }

  function toggleOpenNewTodoForm() {
    setOpenNewTodoForm(!openNewTodoForm);
  }

  function toggleOpenUpdateTodoForm() {
    setOpenUpdateTodoForm(!setOpenUpdateTodoForm);
  }

  return (
    <div className="flex flex-col justify-start gap-8 max-w-3xl mx-auto mt-2 p-4 scroll-smooth">
      <Header
        toggleOpenNewTodoForm={toggleOpenNewTodoForm}
        filterTodos={filterTodos}
        resetFilterTodos={resetFilterTodos}
      />
      {todos.length > 0 ? (
        <Todos
          todos={todos.filter(todo => {
            if (labelToShow === null) return todo;
            else return todo.labels.includes(labelToShow);
          })}
          deleteTodo={deleteTodo}
          handleUpdateClick={handleUpdateClick}
          toggleTodoCompleteStatus={toggleTodoCompleteStatus}
        />
      ) : (
        <NoTodoPage />
      )}
      {openNewTodoForm && (
        <NewTodoForm
          toggleOpenNewTodoForm={toggleOpenNewTodoForm}
          saveNewTodo={saveNewTodo}
        />
      )}
      {openUpdateTodoForm && (
        <UpdateTodoForm
          todoToUpdate={todoToUpdate}
          setTodoToUpdate={setTodoToUpdate}
          toggleOpenUpdateTodoForm={toggleOpenUpdateTodoForm}
          updateTodo={updateTodo}
        />
      )}
    </div>
  );
}

export default App;
