import React, { useState } from "react";
import "../styles.css";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

export default function App() {

  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    
  }
  
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <img src="https://www.relevadoresfinder.com/img/img_uploaded/Linea.png" />
      <img
        className="fondo"
        src="https://i.pinimg.com/originals/84/ba/60/84ba6054098cbe825d227f631c3a7c19.jpg"
      />
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
        onAdd={addItem}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
