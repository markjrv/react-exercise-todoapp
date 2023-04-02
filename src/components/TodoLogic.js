import React from "react";
import AddTodo from "./AddTodo.js";
import TodoList from "./TodoList.js";


function Todologic() {
    return (
        <div className='todo-logic'>
           <AddTodo/>
           <TodoList/>
        </div>
    )
}
export default Todologic