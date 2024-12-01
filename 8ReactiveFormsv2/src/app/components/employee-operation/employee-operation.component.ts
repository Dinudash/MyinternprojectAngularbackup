import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl ,Validators} from '@angular/forms';
@Component({
  selector: 'app-employee-operation',
  templateUrl: './employee-operation.component.html',
  styleUrls: ['./employee-operation.component.css']
})
export class EmployeeOperationComponent implements OnInit {
  empForm:FormGroup
  constructor() { 
    this.empForm=new FormGroup({
      ename:new FormControl('',Validators.required),
      job:new FormControl(''),
      email:new FormControl(''),
      salary:new FormControl('')
      


    })
  }

  ngOnInit(): void {
  }
  clearHandler(){
    //console.log(this.empForm);
   //  this.empForm.value.ename=''
     this.empForm.reset();
  }
  saveEmployee(){
   // console.log(this.empForm.value);
    console.log(this.empForm);
    
  }
}

 