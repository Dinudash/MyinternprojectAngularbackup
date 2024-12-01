import { Component, OnInit } from '@angular/core';
import { ArithServiceService } from '../arith-service.service';

@Component({
  selector: 'app-arithmatic-op',
  templateUrl: './arithmatic-op.component.html',
  styleUrls: ['./arithmatic-op.component.css']
})
export class ArithmaticOpComponent implements OnInit {

  constructor(private arith:ArithServiceService) { }

  ngOnInit(): void {
  }
  firstNo:any="";
  secNo:any="";
  result:any=""
  
  add(){
    this.result=this.arith.add(this.firstNo,this.secNo)
  }
  sub(){
    this.result=this.arith.sub(this.firstNo,this.secNo)
  }
  mul(){
    this.result=this.arith.mul(this.firstNo,this.secNo)
  }
  div(){
    this.result=this.arith.div(this.firstNo,this.secNo)
  }

}
