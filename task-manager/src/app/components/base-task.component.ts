import { Input, Directive } from '@angular/core';
import { Task } from '../models/task.model';

@Directive()
export abstract class BaseTaskComponent {
  @Input() task!: Task; // Task data passed from parent
}