import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  data:any;
  someData:any;
  constructor() { }

  ngOnInit(): void {
  }
  getData(data:any){
   // alert(data)
   this.someData=data;
  }
}
