import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithServiceService {

  constructor() { }

  add(firstNo:any,secNo:any){
    return (firstNo-0)+ parseInt(secNo) ;
  }
  sub(firstNo:any,secNo:any){
    return (firstNo)- (secNo) ;
  }
  mul(firstNo:any,secNo:any){
    return (firstNo)*(secNo) ;
  }
  div(firstNo:any,secNo:any){
    return (firstNo)/(secNo) ;
  }
}
