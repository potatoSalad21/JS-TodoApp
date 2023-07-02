import TodoItem from "./TodoItem";

export default function TodoItems({ todos, toggleTodo, deleteTodo }) {
  return (
    <section className="itemSection">
      <ul className="todoList">
        {todos.length === 0 && "The list is empty!"}
        {todos.map(todo => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </section>
  );
}