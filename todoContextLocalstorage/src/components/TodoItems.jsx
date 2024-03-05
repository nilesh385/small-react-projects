import React, { useState } from "react";
import { useTodo } from "../contexts";

const TodoItems = ({ todo }) => {
  // console.log(typeof todo.completed);
  const [isEditable, setIsEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const handleEdit = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsEditable(false);
  };

  return (
    <div
      className={`w-full max-h-10 flex  p-1 rounded-md  ${
        todo.completed
          ? "bg-gradient-to-l from-green-300 via-cyan-300 to-emerald-300"
          : "bg-gradient-to-l from-orange-200 via-amber-200 to-yellow-100"
      }`}
    >
      <input
        type="checkbox"
        className="ml-2"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <input
        type="text"
        className={`ml-4 w-4/6 p-2 rounded-md bg-transparent focus:outline-none ${
          todo.completed ? "line-through" : ""
        } ${isEditable ? "border-2 border-teal-400" : ""} `}
        value={todoMsg}
        onChange={(e) => {
          setTodoMsg(e.target.value);
        }}
        readOnly={!isEditable}
      />

      <button
        className="ml-auto disabled:cursor-not-allowed"
        onClick={() => {
          if (todo.completed) return;
          if (isEditable) {
            handleEdit();
          } else {
            setIsEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isEditable ? "Save" : "Edit"}
      </button>

      <button
        className={`ml-auto px-2 rounded-md disabled:cursor-not-allowed disabled:bg-emerald-300`}
        onClick={() => {
          deleteTodo(todo.id);
        }}
        disabled={isEditable}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItems;
