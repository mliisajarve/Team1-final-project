import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-outcome-page',
  templateUrl: './search-outcome-page.component.html',
  styleUrls: ['./search-outcome-page.component.css']
})
export class SearchOutcomePageComponent implements OnInit {
  @Input() searchOutcome: string = "";
  @Input() keywords: string = '';

  constructor() {
   }


  ngOnInit(): void {
  }

}
