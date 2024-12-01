import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1builtin_pipes';
  
  employee ={
    firstName:"Anil",
    lastName:"kumar",
    email:"anil@gmail.com",
    job:"CLERK",
    salary:25000,
    dob:"11-nov-2000",
    decimal:2.34554
  }
}
