import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { SaiakesedService } from '../services/saiakesed.service';

@Component({
  selector: 'app-saiakesed',
  templateUrl: './saiakesed.component.html',
  styleUrls: ['./saiakesed.component.css']
})
export class SaiakesedComponent implements OnInit {
  values = this.pastry.sendAllPastries()
  pastries: Product[] = []
  constructor(private pastry: SaiakesedService ) { }

  ngOnInit(): void {
    this.pastries= this.values
  }

}
