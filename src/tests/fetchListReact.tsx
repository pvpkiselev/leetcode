import { useState, useEffect } from 'react';

// Тип для задачи
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Тип для состояния
interface State {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const TodoList = () => {
  const [{ todos, loading, error }, setState] = useState<State>({
    todos: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchTodos = async () => {
      setState((prevState) => ({ ...prevState, loading: true, error: null }));
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
        if (!response.ok) {
          throw new Error('Failed to fetch todos.');
        }
        const data: Todo[] = await response.json();
        setState({ todos: data, loading: false, error: null });
      } catch (e: unknown) {
        if (e instanceof Error) {
          setState((prevState) => ({ ...prevState, loading: false, error: e.message }));
        }
      }
    };

    fetchTodos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;