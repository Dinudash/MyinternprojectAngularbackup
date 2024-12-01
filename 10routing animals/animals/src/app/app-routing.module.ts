import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElephantComponent } from './components/elephant/elephant.component';
import { HomeComponent } from './components/home/home.component';
import { LionComponent } from './components/lion/lion.component';
import { TigerComponent } from './components/tiger/tiger.component';

const routes: Routes = [ 
  { path:"Elephant",component:ElephantComponent},
  { path:"Lion",component:LionComponent},
  { path:"Tiger",component:TigerComponent},
  { path:"Home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
