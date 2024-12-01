import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ArithmaticOpComponent } from './arithmatic-op/arithmatic-op.component';

@NgModule({
  declarations: [
    AppComponent,
    ArithmaticOpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
