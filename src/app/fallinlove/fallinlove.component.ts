import { Component, AfterViewInit } from '@angular/core';

declare var routeAlbum: any;

@Component({
  selector: 'fallinlove-component',
  templateUrl: './fallinlove.component.html',
  styleUrls: [ './fallinlove.component.css' ]
})

export class FallinloveComponent implements AfterViewInit {
  ngAfterViewInit(){
      routeAlbum();
  }
}
