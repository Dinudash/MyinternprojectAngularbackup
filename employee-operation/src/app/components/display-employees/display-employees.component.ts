import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeOperationsService } from 'src/app/services/employee-operations.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css']
})
export class DisplayEmployeesComponent implements OnInit {
  employeesList:any=[]
  @Output() onEditEvent:EventEmitter<any> 
  constructor(public empOperation:EmployeeOperationsService,private toastr:ToastrService) { 
    this.onEditEvent=new EventEmitter();
  }

  ngOnInit(): void {
    this.empOperation.getAllEmployees()
    .subscribe({
      next:(data:any)=>{
        console.log("data",data);
        this.empOperation.employeesList = data;
        this.employeesList=data
      },
      error:()=>{},
      complete:()=>{}
    })
  }

 
  deleteEmployee(id:any){
     //alert(id)
     this.empOperation.deleteEmployee(id)
     .subscribe({
       next:(result)=>{
        this.toastr.error("Employee Delete",'Deleted Successfully ');
        this.empOperation.getAllEmployees()
        .subscribe({
          next:(data:any)=>{
            console.log("data",data);
            this.empOperation.employeesList=data;
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

