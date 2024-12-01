import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeesOperationsComponent } from './components/employees-operations/employees-operations.component';
import { DisplayEmployeesComponent } from './components/display-employees/display-employees.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeesOperationsComponent,
    DisplayEmployeesComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
