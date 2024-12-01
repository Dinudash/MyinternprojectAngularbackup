import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
 
  taskList:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  del(ind:number){
    // this.toastr.error('Deleted Successfully ');
     this.taskList.splice(ind,1)
    // this.toastr.error('Deleted Successfully ');
     //alert(ind);
     
   }
}
