import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { OperationsComponent } from './components/operations/operations.component';
import { ServicesComponent } from './components/services/services.component';


const routes: Routes = [
  {path:"Home",component:HomeComponent},
  {path:"About-Us",component:AboutusComponent},
  {path:"Operations",component:OperationsComponent},
  {path:"Services",component:ServicesComponent},
  {path:"Contact-Us",component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
