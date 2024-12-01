import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ArithmaticOpComponent } from './components/arithmatic-op/arithmatic-op.component';
import { EmployeeOpComponent } from './components/employee-op/employee-op.component';

@NgModule({
  declarations: [
    AppComponent,
    ArithmaticOpComponent,
    EmployeeOpComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
