import { PRIORITIES, PRIORITY_LABELS } from '../constants';
import type { PriorityFilterValue } from '../types';

const OPTIONS: { value: PriorityFilterValue; label: string }[] = [
  { value: 'all', label: 'Все' },
  ...PRIORITIES.map((priority) => ({ value: priority, label: PRIORITY_LABELS[priority] })),
];

interface Props {
  value: PriorityFilterValue;
  onChange: (value: PriorityFilterValue) => void;
}

export function PriorityFilter({ value, onChange }: Props) {
  return (
    <div className="filter" role="group" aria-label="Фильтр по приоритету">
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={value === option.value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
