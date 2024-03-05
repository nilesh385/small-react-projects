import React, { useState } from "react";
import { useTodo } from "../contexts";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo, todos } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    console.log(todos);
    setTodo("");
    // console.log(todos, todo);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full flex">
      <input
        type="text"
        className=" rounded-l-md p-2 w-full focus:outline-none"
        placeholder="Write Todo..."
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className=" bg-emerald-600 text-white px-5 rounded-r-md">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
