import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HupaLibraryModule } from 'HupaLibrary';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HupaLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
