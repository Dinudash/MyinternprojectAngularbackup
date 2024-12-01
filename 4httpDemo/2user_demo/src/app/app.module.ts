import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { UserDemoComponent } from './components/user-demo/user-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
