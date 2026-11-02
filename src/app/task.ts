export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

export const COLUMNS: ReadonlyArray<{ id: TaskStatus; title: string; hint: string }> = [
  { id: 'todo', title: 'To Do', hint: 'Ready when you are' },
  { id: 'in-progress', title: 'In Progress', hint: 'A little closer to done' },
  { id: 'done', title: 'Done', hint: 'Small wins, big progress' },
];
