import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent }         from './app.component';
import { LoveTreeComponent }   from './lovetree/lovetree.component';
import { HomeComponent }   from './home/home.component';
import { JourneyComponent }   from './journey/journey.component';
import { BirthDay1Component }   from './birthday/birthday1.component';

import { AppRoutingModule }     from './app-routing.module';
import {SidebarModule} from 'primeng/sidebar';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule
  ],
  declarations: [
    AppComponent,
    LoveTreeComponent,
    HomeComponent,
    JourneyComponent,
    BirthDay1Component
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
