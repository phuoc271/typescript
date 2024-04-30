import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Bai2Component } from './bai2/bai2.component';
import { Bai3Component } from './bai3/bai3.component';
import { Bai4Component } from './bai4/bai4.component';
import { Bai5Component } from './bai5/bai5.component';
import { Bai6Component } from './bai6/bai6.component';
import { Bai7Component } from './bai7/bai7.component';


@NgModule({
  declarations: [
    AppComponent,
    Bai2Component,
    Bai3Component,
    Bai4Component,
    Bai5Component,
    Bai6Component,
    Bai7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
