import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor( private el:ElementRef) {
    console.log(this.el.nativeElement);
    
   }
@HostListener('click')
 nextFunc(){
  //console.log(element);
 var element=this.el.nativeElement.parentElement.parentElement.children[0];
 var item=element.getElementsByClassName("item");
 element.append(item[0]);
 console.log(item);

 }
}
