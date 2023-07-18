import React from "react";
import "./CardTodos.css"
import ReactLoading from 'react-loading';

const CardTodos = ({ todos }) => {
  if (todos === null) {
    return (
      <div className="looding">
        <h1>Loading...</h1>
        <ReactLoading type={'spin'} color={'#ffffff'} height={50} width={50} />
    </div>
    );
  }
  const limitedTodos = todos.slice(0, 100); 
  return (
    <div className="todos">
      <div className="baslik">
        <h1>API:https://jsonplaceholder.typicode.com/todos</h1>
      </div>
      {limitedTodos.map((todos, index) => (
      <div key={index} className="card-todos">
        <div className="index">
          <h1>{index + 1}</h1>
        </div>
        <div className="todos-title">
          <p><span>Todo: </span>{todos.title.charAt(0).toUpperCase() + todos.title.slice(1)}</p>
          <span className={todos.completed ? "completed" : "not-completed"}>{todos.completed ? "Completed" : "Not Completed"}
          </span>
        </div>
      </div>
      ))}
    </div>
  )
};

export default CardTodos;
