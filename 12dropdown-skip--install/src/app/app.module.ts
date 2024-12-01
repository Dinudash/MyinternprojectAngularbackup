import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PenComponent } from './components/pen/pen.component';
import { NoteComponent } from './components/note/note.component';
import { BookComponent } from './components/book/book.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { LaptopComponent } from './components/laptop/laptop.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PenComponent,
    NoteComponent,
    BookComponent,
    MobileComponent,
    LaptopComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
