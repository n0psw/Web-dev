import { Component } from '@angular/core';
import { BaseTaskComponent } from '../base-task.component';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent extends BaseTaskComponent {}