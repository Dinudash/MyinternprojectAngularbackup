
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { EmployeeOperationsService } from 'src/app/services/employee-operations.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup ,FormControl ,Validators,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  
  @Input() emp:any;
  
  @Output() onCancelUpdate:EventEmitter<any>;
      empForm=this.empOperSer.getEmpFormObject();
      
      //for formBuilder
      //this.fb.group({
      //   _id:['',Validators.required],
      //   ename: ['' , [Validators.required,
      //               Validators.minLength(4),
      //               Validators.maxLength(10)]],
      //   job: [''],
      //   email: [''],
      //   salary: ['', [Validators.required,
      //               Validators.min(20000),
      //             Validators.max(200000)]],
      
      // });
  

  constructor(private empOperSer:EmployeeOperationsService,
    private toastr:ToastrService,
    ) { 
    this.onCancelUpdate=new EventEmitter();
   
  }
  ngOnInit(): void {
    this.empForm.setValue({...this.emp});
  }
  ngOnChanges(changes : SimpleChanges){
     console.log('changes',changes);
     console.log('changes',changes['emp'].currentValue);
     this.empForm.setValue({...changes['emp'].currentValue});
     }
  
     updateEmployee(){
      console.log("emp",this.empForm.value);
      this.empOperSer.updateEmployee(this.empForm.value)
     .subscribe({
      next:(result:any)=>{
       //this.toastr.info("Employee updated",'updated successfully...');
       console.log("result",result);
      //this.clearForm()
      this.empOperSer.getAllEmployees()
      .subscribe({
        next:(data:any)=>{
          console.log("data",data);
          this.empOperSer.employeesList=data;
           this.cancelForm();
        },
        error:()=>{},
        complete:()=>{},
      })
     
    },
    error:()=>{},
    complete:()=>{},
  });
  this.toastr.info("Employee updated",'updated successfully...');
  }
  cancelForm(){
    this.onCancelUpdate.emit()
  }
}
