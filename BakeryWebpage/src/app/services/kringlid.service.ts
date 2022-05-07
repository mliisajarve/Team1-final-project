import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class KringlidService {

  constructor() { }
  //all product data will be presented here
  bagels: Product[] =[
    {
      id:1,
      imageUrl: 'url',
      name: 'Kringel1',
      glutenFree: false,
      lactoseFree: false,
      mainComponents: 'komponendid',
      price: 11
    },
  ]

  sendAllBagels() {
    return this.bagels
  }
}
