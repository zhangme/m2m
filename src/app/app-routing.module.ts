import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoveTreeComponent }   from './lovetree/lovetree.component';
import { HomeComponent }   from './home/home.component';
import { JourneyComponent }   from './journey/journey.component';
import { BirthDay1Component }   from './birthday1/birthday1.component';
import { GalleryComponent }   from './gallery/gallery.component';
import { ProposalComponent }   from './proposal/proposal.component';
import { CalendarComponent }   from './calendar/calendar.component';

const routes: Routes = [
  { path: '', redirectTo: 'lovetree', pathMatch: 'full' },
  { path: 'lovetree', component: LoveTreeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'journey',  component: JourneyComponent },
  { path: 'birthday1',  component: BirthDay1Component },
  { path: 'gallery', component: GalleryComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'proposal', component: ProposalComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
