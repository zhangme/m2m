import { Component, AfterViewInit } from '@angular/core';

declare var routeAlbum: any;

@Component({
  selector: 'birthday1-component',
  templateUrl: './birthday1.component.html',
  styleUrls: [ './birthday1.component.css' ]
})

export class BirthDay1Component implements AfterViewInit {
  ngAfterViewInit(){
      routeAlbum();
  }
}
