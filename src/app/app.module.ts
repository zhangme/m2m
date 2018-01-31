import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent }         from './app.component';
import { HomeComponent }   from './home/home.component';
import { JourneyComponent }   from './journey/journey.component';
import { BirthDay1Component }   from './birthday/birthday1.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    JourneyComponent,
    BirthDay1Component
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
