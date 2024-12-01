import { Component, OnInit, Output } from '@angular/core';
import {ArithService} from 'src/app/services/arith.service'
@Component({
  selector: 'app-arithmatic-op',
  templateUrl: './arithmatic-op.component.html',
  styleUrls: ['./arithmatic-op.component.css']
})
export class ArithmaticOpComponent implements OnInit {

  constructor(private arith: ArithService) { }

  ngOnInit(): void {
  }
  firstNo:any="";
  secNo:any="";
  result:any="";
  one:any="";
  Two:any="";
  output:any="";
  add(){
    this.result= this.arith.add(this.firstNo,this.secNo)
  }
  sub(){
    this.result= this.arith.sub(this.firstNo,this.secNo)
  }
  mul(){
    this.result= this.arith.mul(this.firstNo,this.secNo)
  }
  div(){
    this.result= this.arith.div(this.firstNo,this.secNo)
  }


  add1(){
    this.output=this.arith.add1(this.one,this.Two)
  }
  sub1(){
   this.output=this.arith.sub1(this.one,this.Two)
  }
}

