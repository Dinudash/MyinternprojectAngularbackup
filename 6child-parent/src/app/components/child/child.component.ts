
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  someData:any=""
  @Output() onSendData =new EventEmitter<any>;
  constructor() { 
  
  }

  ngOnInit(): void {
  }
  sendData(){
    //alert(this.someData)
     this.onSendData.emit(this.someData)
     this.someData="";
  }
}
