import { Component, EventEmitter, Output } from '@angular/core';
import { BaseTaskComponent } from '../base-task.component';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent extends BaseTaskComponent {
  @Output() taskCompleted = new EventEmitter<number>();

  markAsCompleted() {
    this.task.status = 'Completed';
    this.taskCompleted.emit(this.task.id);
  }
}