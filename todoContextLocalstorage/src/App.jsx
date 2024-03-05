import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";
import { ToDoProvider } from "./contexts";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos]);
  };

  const updateTodo = (id, todo) => {
    setTodos(
      (
        prevTodos
        /*the prevTodo is just a local variable which contains all the todos which are added in todos*/
      ) => prevTodos.map((eachTodo) => (eachTodo.id === id ? todo : eachTodo))
    );
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((eachTodo) => {
        return eachTodo.id === id
          ? { ...eachTodo, completed: !eachTodo.completed }
          : eachTodo;
      })
    );
  };

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(savedTodos);
    if (savedTodos && savedTodos.length > 0) {
      setTodos(savedTodos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((eachTodo) => eachTodo.id !== id));
  };
  return (
    <ToDoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className=" h-dvh w-dvw flex flex-col items-center justify-center bg-gradient-to-tr from-indigo-200 via-cyan-200 to-violet-800">
        <h1 className="w-full px-5 py-2 text-3xl text-center font-bold font-serif underline underline-offset-4">
          Manage Your Todos
        </h1>
        <div className="h-4/5 w-2/5 flex flex-col gap-2">
          <TodoForm />
          <div className="w-full max-h-[90%] overflow-auto space-y-2 px-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full max-h-full">
                <TodoItems todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
};

export default App;
