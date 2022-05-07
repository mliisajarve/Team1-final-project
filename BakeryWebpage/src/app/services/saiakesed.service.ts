import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SaiakesedService {
  //all product data will be presented here
  pastries: Product[] = [
    {
      id:1,
      imageUrl: 'url',
      name: 'Saiake1',
      glutenFree: true,
      lactoseFree: false,
      mainComponents: 'komponendid',
      price: 12
    }
  ]
  constructor() { }

  sendAllPastries() {
    return this.pastries
  }
}
