import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app/app.component';
/**
 * Custom components
 */
import { MainframeComponent } from './app/mainframe/';
import { SidebarComponent } from './app/sidebar/';
import { ContentComponent } from './app/content/';


@NgModule({

  imports:  [
    BrowserModule
    ],

  declarations: [
    AppComponent,
    MainframeComponent,
    SidebarComponent,
    ContentComponent
    ],

  providers: [
    ],

  bootstrap:    [ AppComponent ]

})

export class AppModule { }
