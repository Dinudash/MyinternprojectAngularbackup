import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-todos-app',
  templateUrl: './todos-app.component.html',
  styleUrls: ['./todos-app.component.css']
})
export class TodosAppComponent implements OnInit {
  task:any="";
  taskList:any=[];
  taskErr=""
  constructor(private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  addTask(task:any){
   // this.toastr.success("Added",'Task added Successfully ');
    if(!this.task){
      this.taskErr=" *Task sholud not b empty"
      return
    }
    this.toastr.success("Added",'Task added Successfully ');
    // this.toastr.success("Added",'Task added Successfully ');
    this.taskList.push(this.task);
   // this.toastr.success("Added",'Task added Successfully ');
    this.task="";
    console.log(this.taskList);
    this.taskErr=""
  }
  del(ind:number){
   this.toastr.error('Deleted Successfully ');
  //  this.toastr.error('Deleted Successfully ');
    this.taskList.splice(ind,1)
    //this.toastr.error('Deleted Successfully ');
    //alert(ind);
  }
}
