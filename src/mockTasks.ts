import type { Task } from './types';

const now = Date.now();

export const mockTasks: Task[] = [
  { id: 'mock-1', title: 'Исправить баг с авторизацией', priority: 'high', done: false, createdAt: now - 5000 },
  { id: 'mock-2', title: 'Обновить зависимости', priority: 'low', done: true, createdAt: now - 4000 },
  { id: 'mock-3', title: 'Написать README', priority: 'medium', done: false, createdAt: now - 3000 },
  { id: 'mock-4', title: 'Провести код-ревью', priority: 'medium', done: false, createdAt: now - 2000 },
  { id: 'mock-5', title: 'Подготовить релиз', priority: 'high', done: false, createdAt: now - 1000 },
];
