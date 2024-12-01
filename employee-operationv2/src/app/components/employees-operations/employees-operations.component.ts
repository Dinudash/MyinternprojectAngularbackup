
import { Component, OnInit } from '@angular/core';
import { EmployeeOperationsService } from 'src/app/services/employee-operations.service';

@Component({
  selector: 'app-employees-operations',
  templateUrl: './employees-operations.component.html',
  styleUrls: ['./employees-operations.component.css']
})
export class EmployeesOperationsComponent implements OnInit {
    formFlag="create"
    currEmp:any={}
  constructor(private empOperation:EmployeeOperationsService ) { }

  ngOnInit(): void {
    this.empOperation.getAllEmployees()
    .subscribe({
      next:(data:any)=>{
        console.log("data",data);
        this.empOperation.employeesList=data;
      },
      error:()=>{},
      complete:()=>{}
    })
  }
  editEmployee(emp:any){
    console.log(emp);
    this.formFlag="update"
    this.currEmp={...emp}
  }
  cancelForm(data:any){
    this.formFlag="create"
  }
}
