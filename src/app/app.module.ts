import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent }         from './app.component';
import { LoveTreeComponent }   from './lovetree/lovetree.component';
import { HomeComponent }   from './home/home.component';
import { JourneyComponent }   from './journey/journey.component';
import { BirthDay1Component }   from './birthday1/birthday1.component';
import { BirthDay2Component }   from './birthday2/birthday2.component';
import { GalleryComponent }   from './gallery/gallery.component';
import { ProposalComponent }   from './proposal/proposal.component';
import { CalendarComponent }   from './calendar/calendar.component';
import { TimeLineComponent }   from './timeline/timeline.component';

import { AppRoutingModule }     from './app-routing.module';

import { SidebarModule } from 'primeng/sidebar';
import { ScheduleModule } from 'primeng/schedule';
import { LightboxModule } from 'primeng/lightbox';
import { FieldsetModule } from 'primeng/fieldset';


import * as $ from "jquery";
import * as moment from 'moment';
import 'jquery';
import 'moment';
import 'fullcalendar';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    ScheduleModule,
    LightboxModule,
    FieldsetModule
  ],
  declarations: [
    AppComponent,
    LoveTreeComponent,
    HomeComponent,
    JourneyComponent,
    BirthDay1Component,
    BirthDay2Component,
    GalleryComponent,
    ProposalComponent,
    CalendarComponent,
    TimeLineComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
