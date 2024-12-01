import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeOperationsService } from 'src/app/services/employee-operations.service';
//import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css']
})
export class DisplayEmployeesComponent implements OnInit {
  employeesList:any=[]
  @Output() onEditEvent:EventEmitter<any> 
  constructor(public empOperSer:EmployeeOperationsService) { 
    this.onEditEvent=new EventEmitter();
  }

  ngOnInit(): void {
    this.empOperSer.getAllEmployees()
    .subscribe({
      next:(data:any)=>{
        console.log("data",data);
        this.empOperSer.employeesList = data;
        this.employeesList=data
      },
      error:()=>{},
      complete:()=>{}
    })
  }

 
  deleteEmployee(id:any){
     //alert(id)
     this.empOperSer.deleteEmployee(id)
     .subscribe({
       next:(result)=>{
       // this.toastr.error("Employee Deleted",'Deleted Successfully ');
        this.empOperSer.getAllEmployees()
        .subscribe({
          next:(data:any)=>{
            console.log("data",data);
            this.empOperSer.employeesList=data;
            this.employeesList=data
            },
          error:()=>{},
          complete:()=>{}
        })
      },
      error:()=>{},
      complete:()=>{}
      })
 }
 editEmployee(emp:any){
  //alert(id);
  this.onEditEvent.emit(emp)
 }
}

