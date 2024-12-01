import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '3event_binding';
  value="will fuck you"
  ui=""
  click(){
    alert("tq.....");
    console.log(this.value);
    
  }

}
