
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EmployeeOperationsService } from 'src/app/services/employee-operations.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  empOperation: any;
  


  constructor(private empOpr:EmployeeOperationsService ,private toastr:ToastrService) { }

  ename:string="";
   job:string="";
   email:string="";
   salary:string=""
  ngOnInit(): void {
  }
  createEmployee(){
   console.log("ename",this.ename);
   console.log("job",this.job);
   console.log("email",this.email);
   console.log("salary",this.salary);
   
   if(!this.ename || !this.job || !this.email || !this.salary){
    alert("Data is mandatory for some fields")
    return;
  }
  const employee={
    ename:this.ename,
    job:this.job,
    email:this.email,
    salary:this.salary
  }
  this.empOpr.createEmployee(employee)
  .subscribe({
    next:(result:any)=>{
      this.toastr.success("Employee created",'Successfully created');
      console.log("result",result);
      this.clearForm()
     //this.toastr.success('Successfully created')
      this.empOpr.getAllEmployees()
      .subscribe({
        next:(data:any)=>{
          console.log("data",data);
          this.empOpr.employeesList=data;
          
        },
        error:()=>{},
        complete:()=>{}
      })
      
    },
    error:()=>{},
    complete:()=>{}
  })


  }
  clearForm(){
   this.ename="";
   this.job="";
   this.email="";
   this.salary="";
  }

}
