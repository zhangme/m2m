import { Component, AfterViewInit } from '@angular/core';

declare var showCanvas: any;
declare var clearProcess: any;

@Component({
  selector: 'lovetree-component',
  templateUrl: './lovetree.component.html',
  styleUrls: [ './lovetree.component.css' ]
})

export class LoveTreeComponent implements AfterViewInit {
  ngAfterViewInit(){
      clearProcess();
      showCanvas();
  }
}
