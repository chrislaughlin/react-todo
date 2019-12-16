import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
const initToDos = [
  { label: "Write Talk", id: 1 },
  { label: "Buy Christmas Gifts", id: 2 },
  { label: "Make new years resolutions", id: 3 },
  { label: "Break new years resolutions", id: 4 }
];

function App() {
  const [todos, setTodos] = useState(initToDos);
  const [newTodo, setNewTodo] = useState("");

  return (
    <div className="App">
      <h1>TODO List</h1>
      <input
        placeholder="Add new TODO...."
        value={newTodo}
        onKeyDown={event => {
          if (event.key === "Enter") {
            setTodos(curr => {
              return [
                ...curr,
                { id: Math.random(), label: event.target.value }
              ];
            });
            setNewTodo("");
          }
        }}
        onChange={event => {
          setNewTodo(event.target.value);
        }}
      />
      <ul>
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <span>{todo.label}</span>
              <i>X</i>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
