import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list', // ✅ This should match what is used in `app.component.html`
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class AppComponent {
  title = 'task-manager';

  constructor() {
    console.log("✅ AppComponent Loaded!"); // Debug log
  }
}