import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeOperationsService {
  employeesList: any=[]

  constructor(private http:HttpClient,private fb:FormBuilder) { }
  getAllEmployees(){
     return this.http.get('http://localhost:5000/employees')
    }
    createEmployee(employee:any){
      console.log("employees",employee);
      return this.http.post('http://localhost:5000/employees',employee)
      }
  deleteEmployee(id:any){
    return this.http.delete('http://localhost:5000/employees/'+ id)
  }
  updateEmployee(emp:any){
    return this.http.put('http://localhost:5000/employees/'+ emp._id,emp)
  }
  getEmpFormObject(){
    return this.fb.group({
      //this _id is for update purpose error
      _id:['',Validators.required],
      ename: ['' , [Validators.required,
                  Validators.minLength(4),
                   Validators.maxLength(10)]],
      job: [''],
      email: [''],
      salary: ['', [Validators.required,
                  Validators.min(20000),
                 Validators.max(200000)]],
     
    });
  }
  
 
    
}
