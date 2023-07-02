import { useState } from 'react';

export default function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item">New Todo</label>
      <input 
        type="text"
        id="item"
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button className="btn" type="submit">Add</button>
    </form>
  );
}