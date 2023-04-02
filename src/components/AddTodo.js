import React from "react";
import { FaPlusCircle } from "react-icons/fa";

function AddTodo() {
  return (
    <div className="Add-todo-container">
      <input className="Add-todo" placeholder="Add todo..."></input>
      <FaPlusCircle className="icon" onClick={() => {}} />
    </div>
  );
}

export default AddTodo;
