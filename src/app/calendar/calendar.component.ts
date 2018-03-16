import { Component, AfterViewInit } from '@angular/core';

import 'fullcalendar';


declare var clearProcess: any;

@Component({
  selector: 'calendar-component',
  templateUrl: './calendar.component.html',
  styleUrls: [ './calendar.component.css' ]
})

export class CalendarComponent implements AfterViewInit {

    events: any[] = [];
    header: any;

    ngAfterViewInit(){
        clearProcess();

    }

    ngOnInit() {
        this.header = {
            left: 'today',
            center: 'title',
            right: 'prev next'
        };

        this.addEvents();
        this.addAnniversary();

    }

    addEvents(){
        this.events.push(
            {
                "title": "漫长旅途的第一次陪伴",
                "start": "2017-11-18",
                "end": "2017-11-25"
            }
        );
        this.events.push(
            {
                "title": "相约日本",
                "start": "2018-05-27",
                "end": "2018-06-02"
            }
        );
    }

    addAnniversary(){
        for (var i = 0; i < 100; i++) {
            var date = (2017+i).toString()+"-05-18"
            this.events.push(
                {
                    "title": "相识纪念日",
                    "start": date
                }
            );
        };
        for (var i = 0; i < 100; i++) {
            var date = (2017+i).toString()+"-11-18"
            this.events.push(
                {
                    "title": "相恋纪念日",
                    "start": date
                }
            );
        };
        for (var i = 0; i < 100; i++) {
            var date = (2017+i).toString()+"-11-19"
            this.events.push(
                {
                    "title": "初吻纪念日😚",
                    "start": date
                }
            );
        };
    }

}
