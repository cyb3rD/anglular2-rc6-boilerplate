import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app/app.component';
import { MainframeComponent } from './app/mainframe/';


@NgModule({

  imports:  [
    BrowserModule
    ],

  declarations: [
    AppComponent,
    MainframeComponent
    ],

  providers: [
    ],

  bootstrap:    [ AppComponent ]

})

export class AppModule { }
