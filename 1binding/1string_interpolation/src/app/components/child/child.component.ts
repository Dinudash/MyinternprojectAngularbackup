import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  someData="";
  
  @Output() matter : EventEmitter<any>
  constructor() {
    this.matter=new EventEmitter()
   }

  ngOnInit(): void {
  }
 
  sendData(){
   this.matter.emit(this.someData);
   this.someData="";
  }
}





