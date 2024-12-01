import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  formFlag= "carousel" ;
  saveDatails: any;
  
  constructor() { }

  ngOnInit(): void {
  }
  details(data:any)
  {
    console.log("header data: ", data);
    this.saveDatails = data;
    this.formFlag = "users-details"
  }
 
}
