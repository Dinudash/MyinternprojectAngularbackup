import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http'
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { DisplayEmployeesComponent } from './components/display-employees/display-employees.component';
import { EmployeesOperationsComponent } from './components/employees-operations/employees-operations.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

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
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
