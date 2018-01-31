import { Component, AfterViewInit } from '@angular/core';

declare var routeAlbum: any;

@Component({
  selector: 'journey-component',
  templateUrl: './journey.component.html',
  styleUrls: [ './journey.component.css' ]
})

export class JourneyComponent implements AfterViewInit {
  ngAfterViewInit(){
      routeAlbum();
  }
}
