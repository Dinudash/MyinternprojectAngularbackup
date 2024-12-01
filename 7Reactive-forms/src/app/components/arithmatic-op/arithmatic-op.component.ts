import { Component, OnInit } from '@angular/core';
import{FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-arithmatic-op',
  templateUrl: './arithmatic-op.component.html',
  styleUrls: ['./arithmatic-op.component.css']
})
export class ArithmaticOpComponent implements OnInit {
  firstNo:FormControl
  secNo:FormControl
  result:FormControl
  constructor() { 
    this.firstNo=new FormControl(''),
    this.secNo=new FormControl(''),
    this.result=new FormControl('')
  }

  ngOnInit(): void {
  }
  add(){
  console.log
   ((this.firstNo.value-0)+(this.secNo.value-0));
   this.result.setValue((this.firstNo.value-0)+(this.secNo.value-0))
  }
  sub(){
    console.log(this.firstNo.value - this.secNo.value);
    this.result.setValue((this.firstNo.value)-(this.secNo.value))
  }
  mul(){
    console.log(this.firstNo.value * this.secNo.value); 
    this.result.setValue((this.firstNo.value-0)*(this.secNo.value-0)) 
  }
  div(){
    console.log(this.firstNo.value / this.secNo.value);
    this.result.setValue((this.firstNo.value-0)/(this.secNo.value-0))
  }
}
