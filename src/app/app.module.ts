import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HighlightDirective } from './Highlight';
import { AppComponent } from './app.component';

import {Header} from './app.HeaderComponent'
import {Contain} from './app.ContainComponent'
import {Footer} from './app.FooterComponent'
import {Home} from './app.HomeComponent'

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    Home,
    Header,
    Contain,
    Footer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
