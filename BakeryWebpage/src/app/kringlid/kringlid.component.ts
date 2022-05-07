import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { KringlidService } from '../services/kringlid.service';

@Component({
  selector: 'app-kringlid',
  templateUrl: './kringlid.component.html',
  styleUrls: ['./kringlid.component.css']
})
export class KringlidComponent implements OnInit {
  values= this.allbagels.sendAllBagels()
  bagels: Product[] = []

  constructor(private allbagels: KringlidService) { }

  ngOnInit(): void {
    this.bagels = this.values
  }

}
