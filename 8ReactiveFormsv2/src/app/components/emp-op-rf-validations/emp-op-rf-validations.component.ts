import { WriteKeyExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl ,Validators} from '@angular/forms';
@Component({
  selector: 'app-emp-op-rf-validations',
  templateUrl: './emp-op-rf-validations.component.html',
  styleUrls: ['./emp-op-rf-validations.component.css']
})
export class EmpOpRfValidationsComponent implements OnInit {
  empForm:FormGroup
  constructor() { 
    this.empForm=new FormGroup({
      ename:new FormControl('',[Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)]),
      job:new FormControl('',Validators.required),
      email:new FormControl(''),
      salary:new FormControl('',[Validators.required,
                                  Validators.min(20000),
                                  Validators.max(200000)])
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
