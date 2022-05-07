import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { TordidService } from '../services/tordid.service';

@Component({
  selector: 'app-tordid',
  templateUrl: './tordid.component.html',
  styleUrls: ['./tordid.component.css']
})
export class TordidComponent implements OnInit {

  constructor(private allCakes: TordidService ) { }
  values = this.allCakes.sendAllCakes()
  cakes: Product[] = []


  ngOnInit(): void {
    this.cakes = this.values
  }


}
