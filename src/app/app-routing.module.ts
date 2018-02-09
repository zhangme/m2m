import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoveTreeComponent }   from './lovetree/lovetree.component';
import { HomeComponent }   from './home/home.component';
import { JourneyComponent }   from './journey/journey.component';
import { BirthDay1Component }   from './birthday/birthday1.component';

const routes: Routes = [
  { path: '', redirectTo: '/lovetree', pathMatch: 'full' },
  { path: 'lovetree', component: LoveTreeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'journey',  component: JourneyComponent },
  { path: 'birthday1',  component: BirthDay1Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
