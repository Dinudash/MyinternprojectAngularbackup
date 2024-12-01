import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { EmployeeOperationComponent } from './components/employee-operation/employee-operation.component';
import { EmpOpRfValidationsComponent } from './components/emp-op-rf-validations/emp-op-rf-validations.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeOperationComponent,
    EmpOpRfValidationsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
