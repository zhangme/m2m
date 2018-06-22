import { Component, AfterViewInit } from '@angular/core';

import 'fullcalendar';
import * as moment from 'moment';

declare var clearProcess: any;

@Component({
  selector: 'calendar-component',
  templateUrl: './calendar.component.html',
  styleUrls: [ './calendar.component.css' ]
})

export class CalendarComponent implements AfterViewInit {

    events: any[] = [];
    header: any;
    today = moment().format('YYYY-MM-DD');

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

    eventClickHandler(event) {
        if (event.url) {
          window.open(event.url);
          return false;
        }
    }
    addEvents(){
        this.events.push(
            {
                "title": "情人节",
                "start": this.today,
                "url":"journey"
            }
        );
        this.events.push(
            {
                "title": "漫长旅途的起始",
                "start": "2017-11-18",
                "end": "2017-11-25"
            }
        );
        this.events.push(
            {
                "title": "相约日本",
                "start": "2018-05-27",
                "end": "2018-06-03"
            }
        );
    }

    addAnniversary(){
        for (var i = 0; i < 100; i++) {
            var date = (2017+i).toString()+"-05-18"
            this.events.push(
                {
                    "title": "💬纪念日",
                    "start": date
                }
            );
        };
        for (var i = 0; i < 100; i++) {
            var date = (2017+i).toString()+"-11-18"
            this.events.push(
                {
                    "title": "💕纪念日",
                    "start": date
                }
            );
        };
        for (var i = 0; i < 100; i++) {
            var date = (2017+i).toString()+"-11-19"
            this.events.push(
                {
                    "title": "😚纪念日",
                    "start": date
                }
            );
        };
        for (var i = 0; i < 100; i++) {
            var date = (2018+i).toString()+"-05-28"
            this.events.push(
                {
                    "title": "🙈纪念日",
                    "start": date
                }
            );
        };
        for (var i = 0; i < 100; i++) {
            var date = (2018+i).toString()+"-05-29"
            this.events.push(
                {
                    "title": "💍纪念日",
                    "start": date
                }
            );
        };
        // for (var i = 0; i < 100; i++) {
        //     var date = (2019+i).toString()+"-07-22"
        //     this.events.push(
        //         {
        //             "title": "🛏️纪念日",
        //             "start": date
        //         }
        //     );
        // };
        // for (var i = 0; i < 100; i++) {
        //     var date = (2019+i).toString()+"-07-22"
        //     this.events.push(
        //         {
        //             "title": "📕纪念日",
        //             "start": date
        //         }
        //     );
        // };
        // for (var i = 0; i < 100; i++) {
        //     var date = (2020+i).toString()+"-06-22"
        //     this.events.push(
        //         {
        //             "title": "💒纪念日",
        //             "start": date
        //         }
        //     );
        // };
    }

}
