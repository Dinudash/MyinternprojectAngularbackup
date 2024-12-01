import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArithmaticOpComponent } from './components/arithmatic-op/arithmatic-op.component';

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
