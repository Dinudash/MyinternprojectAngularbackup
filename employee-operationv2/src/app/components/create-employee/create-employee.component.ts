import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EmployeeOperationsService } from 'src/app/services/employee-operations.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup ,FormControl ,Validators} from '@angular/forms';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  empForm:FormGroup;
  empOperation: any;
  


  constructor(private empOprSer:EmployeeOperationsService ,private toastr:ToastrService) {
    this.empForm=new FormGroup({
      ename:new FormControl('',[Validators.required,
                              Validators.minLength(4),
                               Validators.maxLength(10)]),
      job:new FormControl(''),
      email:new FormControl(''),
      salary:new FormControl('',[Validators.required,
                                  Validators.min(20000),
                                   Validators.max(200000)])
      


    })
   }
  
  ngOnInit(): void {
  }
  createEmployee(){
    console.log(this.empForm.controls['ename'].value);
    console.log(this.empForm.controls['job'].value);
    console.log(this.empForm.controls['email'].value);
    console.log(this.empForm.controls['salary'].value);
  if(!this.empForm.valid){
    alert("Data is mandatory for some fields")
   return;
  }
  const employee={
    ename: this.empForm.controls['ename'].value,
    job: this.empForm.controls['job'].value,
    email: this.empForm.controls['email'].value,
    salary: this.empForm.controls['salary'].value,
  }
  this.empOprSer.createEmployee(employee)
  .subscribe({
    next:(result:any)=>{
      this.toastr.success("Employee created",'Successfully created');
      console.log("result",result);
      this.clearForm()
     //this.toastr.success('Successfully created')
      this.empOprSer.getAllEmployees()
      .subscribe({
        next:(data:any)=>{
          console.log("data",data);
          this.empOprSer.employeesList=data;
          
        },
        error:()=>{},
        complete:()=>{}
      })
      
    },
    error:()=>{},
    complete:()=>{}
  }) 
 // this.toastr.success("Employee created",'Successfully created');


  }
  clearForm(){
  //  this.ename="";
  //  this.job="";
  //  this.email="";
  //  this.salary="";
    this.empForm.reset();
}

}
