import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1string_interpolation';
  employee={
    firstName:"Anil",
    lastName:"kumar",
    email:"anil@gmail.com",
    job:"clerk"
  }
}
