import { useCallback, useReducer } from 'react';
import { mockTasks } from '../mockTasks';
import type { Priority, Task } from '../types';

type Action =
  | { type: 'add'; task: Task }
  | { type: 'toggle'; id: string }
  | { type: 'remove'; id: string };

function tasksReducer(tasks: Task[], action: Action): Task[] {
  switch (action.type) {
    case 'add':
      return [action.task, ...tasks];
    case 'toggle':
      return tasks.map((task) => (task.id === action.id ? { ...task, done: !task.done } : task));
    case 'remove':
      return tasks.filter((task) => task.id !== action.id);
  }
}

export function useTasks() {
  const [tasks, dispatch] = useReducer(tasksReducer, mockTasks);

  // id генерируем здесь, а не в редьюсере: редьюсер должен оставаться чистым
  const addTask = useCallback((title: string, priority: Priority) => {
    const task: Task = {
      id: crypto.randomUUID(),
      title,
      priority,
      done: false,
      createdAt: Date.now(),
    };
    dispatch({ type: 'add', task });
  }, []);

  const toggleTask = useCallback((id: string) => dispatch({ type: 'toggle', id }), []);
  const removeTask = useCallback((id: string) => dispatch({ type: 'remove', id }), []);

  return { tasks, addTask, toggleTask, removeTask };
}
