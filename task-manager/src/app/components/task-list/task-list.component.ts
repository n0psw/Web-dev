import { Component } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list', // ✅ This should match what is used in `app.component.html`
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent {
  constructor() {
    console.log("✅ TaskListComponent Loaded!"); // Debugging Log
  }
  tasks: Task[] = [
    { id: 1, title: 'Finish Angular project', description: 'Implement a task manager', category: 'Work', status: 'Pending', deadline: new Date() },
    { id: 2, title: 'Buy groceries', description: 'Milk, Bread, Eggs', category: 'Personal', status: 'Pending', deadline: new Date() }
  ];

  markTaskCompleted(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) task.status = 'Completed';
  }
}