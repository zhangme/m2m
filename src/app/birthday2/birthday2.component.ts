import { Component, AfterViewInit } from '@angular/core';

declare var clearProcess: any;

@Component({
  selector: 'birthday2-component',
  templateUrl: './birthday2.component.html',
  styleUrls: [ './birthday2.component.css' ]
})

export class BirthDay2Component implements AfterViewInit{
    ngAfterViewInit(){
        clearProcess();
    }

}
