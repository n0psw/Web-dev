import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TaskListComponent }, 
  { path: 'task/:id', component: TaskDetailComponent }
];

@NgModule({
  declarations: [ // ✅ TaskListComponent must be here!
    AppComponent,
    TaskListComponent, 
    TaskItemComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }