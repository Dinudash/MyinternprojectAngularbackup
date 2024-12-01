import { Component, OnInit } from '@angular/core';
import { TodoosService } from '../todoos.service';

@Component({
  selector: 'app-todoos',
  templateUrl: './todoos.component.html',
  styleUrls: ['./todoos.component.css']
})
export class TodoosComponent implements OnInit {
   users:any=[];
  constructor( private todo:TodoosService) { }

  ngOnInit(): void {
    this.todo.getTodoos().
    subscribe({
      complete:()=>{
        console.log('complete block');
        
      },
      error:()=>{
        console.log('Error code');
        
      },
      next:(data:any)=>{
         console.log(data);
         this.users=data;
         
      }
    })
  }
  del(uid: any){
    this.users=this.users.filter((user:any)=> user.id != uid)
  }
}
