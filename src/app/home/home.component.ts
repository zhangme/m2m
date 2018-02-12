import { Component, AfterViewInit } from '@angular/core';

declare var clearProcess: any;

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})

export class HomeComponent implements AfterViewInit {
    ngAfterViewInit(){
        clearProcess();
    }
    visibleSidebar: boolean = false;
    tempSidebar: boolean = false;

}
