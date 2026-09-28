import { FormEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { PRIORITIES, PRIORITY_LABELS } from '../constants';
import type { Priority } from '../types';

interface Props {
  onSubmit: (title: string, priority: Priority) => void;
  onClose: () => void;
}

// Нативный <dialog>: фокус, escифон аботают из коробки, отдельная библиотека не нужна
export function CreateTaskModal({ onSubmit, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [error, setError] = useState('');

  useEffect(() => {
    const dialog = dialogRef.current;
    // проверка нужна, потому что в strictmode эффект в dev срабатывает дважды
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      setError('Введите название задачи');
      return;
    }
    onSubmit(trimmedTitle, priority);
  };

  // клик по подложке (сам <dialog>, а не его содержимое) закрывает окно
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <dialog ref={dialogRef} onClose={onClose} onClick={handleBackdropClick}>
      <form className="modal" onSubmit={handleSubmit} noValidate>
        <h2>Новая задача</h2>

        <label>
          Название
          <input
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              setError('');
            }}
            aria-invalid={Boolean(error)}
          />
        </label>
        {error && <p className="error" role="alert">{error}</p>}

        <label>
          Приоритет
          <select value={priority} onChange={(event) => setPriority(event.target.value as Priority)}>
            {PRIORITIES.map((item) => (
              <option key={item} value={item}>
                {PRIORITY_LABELS[item]}
              </option>
            ))}
          </select>
        </label>

        <div className="modal__actions">
          <button type="button" onClick={onClose}>Отмена</button>
          <button type="submit">Создать</button>
        </div>
      </form>
    </dialog>
  );
}
