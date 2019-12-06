import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newName = event.target.value;
    setTask(newName);
  }

  function addItem() {
    setItems([
      ...items,
      {
        id: items.length,
        value: task
      }
    ]);
  }

  function deleteItem() {}

  return (
    <div className="App">
      <h1>To-do List App</h1>
      <input onChange={handleChange} type="text" value={task} />
      <button onClick={addItem}>Add Task </button>
      <ol>
        {items.map(item => (
          <li key={item.id}>
            {item.value}
            <button onClick={deleteItem}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
