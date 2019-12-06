import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newName = event.target.value;
    setName(newName);
  }

  function addItem() {
    setItems([
      ...items,
      {
        id: items.length,
        value: { name }
      }
    ]);
  }

  return (
    <div className="App">
      <input
        onChange={handleChange}
        type="text"
        // placeholder="What's your name?"
        value={name}
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
