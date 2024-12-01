
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeOperationsService } from 'src/app/services/employee-operations.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  @Input() emp:any;
  
  @Output() onCancelUpdate:EventEmitter<any>
  constructor(private empOperation:EmployeeOperationsService,private toastr:ToastrService) { 
    this.onCancelUpdate=new EventEmitter();
  }
  ngOnInit(): void {
  }
  updateEmployee(){
    console.log("emp",this.emp);
   this.empOperation.updateEmployee(this.emp)
   .subscribe({
    next:(result:any)=>{
      this.toastr.info("Employee updated",'updated successfully...');
      console.log("result",result);
      //this.clearForm()
      this.empOperation.getAllEmployees()
      .subscribe({
        next:(data:any)=>{
          console.log("data",data);
          this.empOperation.employeesList=data;
           this.cancelForm();
        },
        error:()=>{},
        complete:()=>{}
      })
      
    },
    error:()=>{},
    complete:()=>{}
  })
  }
  cancelForm(){
    this.onCancelUpdate.emit()
  }
}
