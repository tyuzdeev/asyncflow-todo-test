import { useCallback, useMemo, useState } from 'react';
import { CreateTaskModal } from './components/CreateTaskModal';
import { PriorityFilter } from './components/PriorityFilter';
import { TaskList } from './components/TaskList';
import { useTasks } from './hooks/useTasks';
import type { Priority, PriorityFilterValue } from './types';

export default function App() {
  const { tasks, addTask, toggleTask, removeTask } = useTasks();
  const [filter, setFilter] = useState<PriorityFilterValue>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const visibleTasks = useMemo(
    () => (filter === 'all' ? tasks : tasks.filter((task) => task.priority === filter)),
    [tasks, filter],
  );

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const handleCreate = useCallback(
    (title: string, priority: Priority) => {
      addTask(title, priority);
      setIsModalOpen(false);
    },
    [addTask],
  );

  return (
    <main className="page">
      <header className="page__header">
        <h1>Задачи</h1>
        <button type="button" onClick={() => setIsModalOpen(true)}>
          Новая задача
        </button>
      </header>

      <PriorityFilter value={filter} onChange={setFilter} />
      <TaskList tasks={visibleTasks} onToggle={toggleTask} onRemove={removeTask} />

      {isModalOpen && <CreateTaskModal onSubmit={handleCreate} onClose={closeModal} />}
    </main>
  );
}
