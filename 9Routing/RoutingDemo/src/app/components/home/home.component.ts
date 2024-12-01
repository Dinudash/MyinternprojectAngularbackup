import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  About(){
    this.router.navigate(['/About-Us'])
  }
  contactus(){
    this.router.navigate(['/Contact-Us'])
  }
  
  operation(){
    this.router.navigate(['/Operations'])
  }
  Services(){
    this.router.navigate(['/Services'])
  }
}
