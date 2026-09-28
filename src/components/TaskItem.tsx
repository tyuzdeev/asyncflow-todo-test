import { memo } from 'react';
import { PRIORITY_LABELS } from '../constants';
import type { Task } from '../types';

interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

// memo + стабильные колбэки из useTasks: при отметке одной задачи остальные не перерисовываются
export const TaskItem = memo(function TaskItem({ task, onToggle, onRemove }: Props) {
  return (
    <li className={task.done ? 'task task--done' : 'task'}>
      <label>
        <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)} />
        <span className="task__title">{task.title}</span>
      </label>
      <span className={`badge badge--${task.priority}`}>{PRIORITY_LABELS[task.priority]}</span>
      <button type="button" onClick={() => onRemove(task.id)} aria-label={`Удалить задачу «${task.title}»`}>
        ✕
      </button>
    </li>
  );
});
