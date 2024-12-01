import { Component, OnInit } from '@angular/core';
import {UsersService} from 'src/app/services/users.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 
  usersList:any=[]

  constructor( private user:UsersService){

  }
  
  
  ngOnInit() {
   this.user.getAllusers()
   .subscribe({
    complete:()=>{
      console.log('complete block');
      
    },
   error:(err)=>{
    console.log('error block');
    console.log(err);
    
   },
   next:(data:any)=>{
    console.log('next block');
    console.log(data);
    this.usersList=data;
  }
})
}
  deleteUser(uid: any){
    this.usersList=this.usersList.filter((user:any)=>user.id != uid);
  }
}


