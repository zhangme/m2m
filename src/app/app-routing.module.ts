import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoveTreeComponent }   from './lovetree/lovetree.component';
import { HomeComponent }   from './home/home.component';
import { JourneyComponent }   from './journey/journey.component';
import { BirthDay1Component }   from './birthday1/birthday1.component';
import { BirthDay2Component }   from './birthday2/birthday2.component';
import { GalleryComponent }   from './gallery/gallery.component';
import { ProposalComponent }   from './proposal/proposal.component';
import { CalendarComponent }   from './calendar/calendar.component';
import { TimeLineComponent }   from './timeline/timeline.component';

const routes: Routes = [
  { path: '', redirectTo: 'lovetree', pathMatch: 'full' },
  { path: 'lovetree', component: LoveTreeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'journey',  component: JourneyComponent },
  { path: 'birthday1',  component: BirthDay1Component },
  { path: 'birthday2',  component: BirthDay2Component },
  { path: 'gallery', component: GalleryComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'proposal', component: ProposalComponent },
  { path: 'timeline',  component: TimeLineComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
