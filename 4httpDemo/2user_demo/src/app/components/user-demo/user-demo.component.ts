import { Component, OnInit } from '@angular/core';
import { UserDService} from 'src/app/services/user-d.service'
@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})
export class UserDemoComponent implements OnInit {

  usersList:any=[]

  constructor( private userD:UserDService){

  }
  
  
  ngOnInit() {
   this.userD.getAllusers()
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
    this.usersList=this.usersList.filter((user:any)=>user.id != uid)
  }
}

