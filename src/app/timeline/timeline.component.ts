import { Component, AfterViewInit } from '@angular/core';

declare var timelineMain: any;
declare var clearProcess: any;

@Component({
  selector: 'timeline-component',
  templateUrl: './timeline.component.html',
  styleUrls: [ './timeline.component.css' ]
})

export class TimeLineComponent implements AfterViewInit {
  ngAfterViewInit(){
      clearProcess();
      timelineMain();
  }
}
