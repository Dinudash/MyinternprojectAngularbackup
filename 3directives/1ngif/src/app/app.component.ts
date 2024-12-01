import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1ngif';
  //  irukiya:any=true;
  toggleFlag:boolean=false;
  tomato:any=1;
  toggle(){
  this.toggleFlag=!this.toggleFlag
 }
 tog(){
  this.tomato=!this.tomato
 }
// press(){
//    this.irukiya=!this.irukiya
// }
}
