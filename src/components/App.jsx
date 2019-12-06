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

  return (
    <div className="App">
      <input
        onChange={handleChange}
        type="text"
        // placeholder="What's your name?"
        value={task}
      />
      <button onClick={addItem}>Add Task </button>
      <ol>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
