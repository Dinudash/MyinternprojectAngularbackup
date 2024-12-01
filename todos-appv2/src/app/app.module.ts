import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { ParentCompComponent } from './components/parent-comp/parent-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    
    AddTaskComponent,
    TaskListComponent,
    ParentCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   AppRoutingModule,
   ToastrModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
