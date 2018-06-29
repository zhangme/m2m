import { Component, AfterViewInit } from '@angular/core';

declare var bd1Main: any;
declare var clearProcess: any;

@Component({
  selector: 'birthday1-component',
  templateUrl: './birthday1.component.html',
  styleUrls: [ './birthday1.component.css' ]
})

export class BirthDay1Component implements AfterViewInit {
  ngAfterViewInit(){
      clearProcess();
      bd1Main();
  }
}
