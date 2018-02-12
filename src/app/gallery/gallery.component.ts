import { Component, AfterViewInit } from '@angular/core';

declare var clearProcess: any;

@Component({
  selector: 'gallery-component',
  templateUrl: './gallery.component.html',
  styleUrls: [ './gallery.component.css' ]
})

export class GalleryComponent implements AfterViewInit {
    ngAfterViewInit(){
        clearProcess();
    }

}
