import { Component, signal } from '@angular/core';
import { TaskCardComponent } from './task-card.component';
import { COLUMNS, Task, TaskStatus } from './task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskCardComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly columns = COLUMNS;
  readonly draft = signal('');
  readonly announcement = signal('');
  readonly tasks = signal<Task[]>([
    { id: 1, title: 'Outline the project', status: 'todo' },
    { id: 2, title: 'Sketch a few ideas', status: 'todo' },
    { id: 3, title: 'Build the first prototype', status: 'in-progress' },
    { id: 4, title: 'Set up the workspace', status: 'done' },
  ]);
  private nextId = 5;

  tasksFor(status: TaskStatus): Task[] {
    return this.tasks().filter(task => task.status === status);
  }

  addTask(event: Event): void {
    event.preventDefault();
    const title = this.draft().trim();
    if (!title) return;
    this.tasks.update(tasks => [...tasks, { id: this.nextId++, title, status: 'todo' }]);
    this.draft.set('');
    this.announcement.set(`Added ${title} to To Do.`);
  }

  moveTask(id: number, status: TaskStatus): void {
    this.tasks.update(tasks => tasks.map(task => task.id === id ? { ...task, status } : task));
    const title = this.tasks().find(task => task.id === id)?.title;
    const column = this.columns.find(column => column.id === status)?.title;
    this.announcement.set(`Moved ${title} to ${column}.`);
  }
}
