import { useState, useEffect } from 'react';
import NewTodoForm from './NewTodoForm.jsx';
import TodoItems from './TodoList.jsx';
import './style.css';

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("TODO_ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("TODO_ITEMS", JSON.stringify(todos));
  }, [todos])

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
        <TodoItems todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </>
    );
}