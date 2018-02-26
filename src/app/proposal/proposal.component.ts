import { Component, AfterViewInit } from '@angular/core';

declare var clearProcess: any;
declare var proposal: any;

@Component({
  selector: 'proposal-component',
  templateUrl: './proposal.component.html',
  styleUrls: [ './proposal.component.css' ]
})

export class ProposalComponent implements AfterViewInit {
    ngAfterViewInit(){
        clearProcess();
        proposal();
    }

}
