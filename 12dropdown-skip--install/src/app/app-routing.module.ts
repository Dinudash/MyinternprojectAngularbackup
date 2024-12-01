import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { HeaderComponent } from './components/header/header.component';
import { LaptopComponent } from './components/laptop/laptop.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { NoteComponent } from './components/note/note.component';
import { PenComponent } from './components/pen/pen.component';

const routes: Routes = [
  {path:"pen" ,component:PenComponent},
  {path:"Note" ,component:NoteComponent},
  {path:"Book" ,component:BookComponent},
  {path:"Mobile" ,component:MobileComponent},
  {path:"Laptop" ,component:LaptopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
