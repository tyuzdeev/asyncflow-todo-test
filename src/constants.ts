import type { Priority } from './types';

export const PRIORITIES: Priority[] = ['high', 'medium', 'low'];

export const PRIORITY_LABELS: Record<Priority, string> = {
  high: 'Высокий',
  medium: 'Средний',
  low: 'Низкий',
};
