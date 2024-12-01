import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithService {

  constructor() { }

    add(firstNo:any,secNo:any){
      return  (firstNo-0)+parseInt(secNo)
    }
    sub(firstNo:any,secNo:any){
      return firstNo-secNo
    }
    mul(firstNo:any,secNo:any){
      return  firstNo*secNo
    }
    div(firstNo:any,secNo:any){
      return  firstNo/secNo
    }
    add1(one:any , Two:any){
      return (one-0) + parseInt(Two)
    }
    sub1(one:any , Two:any){
      return one - Two
    }
}
