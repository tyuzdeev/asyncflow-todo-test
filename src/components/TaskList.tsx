import type { Task } from '../types';
import { TaskItem } from './TaskItem';

interface Props {
  tasks: Task[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

export function TaskList({ tasks, onToggle, onRemove }: Props) {
  if (tasks.length === 0) {
    return <p className="empty">Здесь пока пусто. Создайте задачу или смените фильтр.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  );
}
