import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl ,Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-op',
  templateUrl: './employee-op.component.html',
  styleUrls: ['./employee-op.component.css']
})
export class EmployeeOpComponent implements OnInit {
   empForm:FormGroup;
  
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
