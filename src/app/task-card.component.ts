import { Component, input, output } from '@angular/core';
import { COLUMNS, Task, TaskStatus } from './task';

@Component({
  selector: 'app-task-card',
  standalone: true,
  template: `
    <article class="task-card">
      <h3>{{ task().title }}</h3>
      <label [for]="'status-' + task().id">Move to</label>
      <select
        [id]="'status-' + task().id"
        [attr.aria-label]="'Move ' + task().title + ' to'"
        (change)="changeStatus($any($event.target).value)"
      >
        @for (column of columns; track column.id) {
          <option [value]="column.id" [selected]="column.id === task().status">{{ column.title }}</option>
        }
      </select>
    </article>
  `,
})
export class TaskCardComponent {
  readonly task = input.required<Task>();
  readonly moved = output<TaskStatus>();
  readonly columns = COLUMNS;

  changeStatus(status: string): void {
    const column = this.columns.find(column => column.id === status);
    if (column) this.moved.emit(column.id);
  }
}
