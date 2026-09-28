export type Priority = 'low' | 'medium' | 'high';

// в фильтре к приоритетам добавляется пункт «Все»
export type PriorityFilterValue = Priority | 'all';

export interface Task {
  id: string;
  title: string;
  priority: Priority;
  done: boolean;
  createdAt: number;
}
