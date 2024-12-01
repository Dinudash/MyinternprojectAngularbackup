import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2ngfor';
  
  persons = [{
    firstName:"Anil",
    lastName:"kumar",
    email:"anil@gmail.com",
    job:"clerk"
  },
   {
    firstName:"Dinu",
    lastName:"kumar",
    email:"Dinu@gmail.com",
    job:"IT"
  },
  {
    firstName:"Dinu",
    lastName:"kumar",
    email:"Dinu@gmail.com",
    job:"IT"
  }

]
}
