import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { KringlidService } from '../services/kringlid.service';
import { SaiakesedService } from '../services/saiakesed.service';
import { TordidService } from '../services/tordid.service';

@Component({
  selector: 'app-search-outcome-page',
  templateUrl: './search-outcome-page.component.html',
  styleUrls: ['./search-outcome-page.component.css']
})
export class SearchOutcomePageComponent implements OnInit {
  inputValue: string = "";
  required: boolean = false
  cakeSearch: Product[] = [];
  cakes = this.allCakes.sendAllCakes()
  bagelSearch: Product[] = []
  bagels = this.allBagels.sendAllBagels()
  pastrySearch: Product[] = []
  pastries = this.allPastries.sendAllPastries()
  constructor(private allCakes: TordidService, private allBagels:KringlidService, private allPastries: SaiakesedService) {
   }


  ngOnInit(): void {
    this.cakeSearch = this.cakes 
    this.bagelSearch = this.bagels
    this.pastrySearch = this.pastries
  }
  lenght() {
    if (this.inputValue && this.inputValue.length >= 2){
    this.required = true
  } else{
    this.required = false
  }
}


}
