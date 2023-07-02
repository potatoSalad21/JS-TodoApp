import { useState } from 'react';
import NewTodoForm from './NewTodoForm.jsx';
import './style.css';

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodoList) => {
      return [
        ...currentTodoList,
        { id: crypto.randomUUID(), title, complete: false },
      ];
    });
  }

  function toggleTodo(id, complete) {
    setTodos(currentTodoList => {
      return currentTodoList.map(todo => {
        if (todo.id === id) {
          return { ...todo, complete };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos(currentTodoList => {
      return currentTodoList.filter(todo => todo.id !== id);
    });
  }

  return (
      <>
        <h1>Todo Website</h1>

        <NewTodoForm onSubmit={addTodo} />

        <section className="itemSection">
          <h2 className="header">Todo List:</h2>

          <ul className="todoList">
            {todos.length === 0 && "The list is empty!"}
            {todos.map(todo => {
              return (
                <li key={todo.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={todo.complete}
                      onChange={e => toggleTodo(todo.id, e.target.checked)}
                    />
                    {todo.title}
                  </label>
                  <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
              );
            })}
          </ul>
        </section>
      </>
    );
}