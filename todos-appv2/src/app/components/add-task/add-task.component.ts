import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task:any="";
  taskList:any=[];
  taskErr="";
  

  constructor() { }

  ngOnInit(): void {
  }
  addTask(task:any){
    if(!this.task){
      this.taskErr=" *Task sholud not b empty";
      return
    }
    this.taskList.push(this.task); //not working?
    this.task="";
    console.log(this.taskList);
    this.taskErr=""
  }
}
