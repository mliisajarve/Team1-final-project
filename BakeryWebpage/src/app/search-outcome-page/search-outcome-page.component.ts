import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchInputComponent } from '../search-input/search-input.component';

@Component({
  selector: 'app-search-outcome-page',
  templateUrl: './search-outcome-page.component.html',
  styleUrls: ['./search-outcome-page.component.css']
})
export class SearchOutcomePageComponent implements OnInit {
  @Input() searchOutcome: string = "";
  
  inputValue2: string = "";
  isShown: boolean = false;

  constructor(private searchInput: SearchInputComponent, private router: Router) {
   }


  ngOnInit(): void {

  }


}
