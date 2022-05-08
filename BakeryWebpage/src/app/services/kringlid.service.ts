import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class KringlidService {

  constructor() { }
  //all product data will be presented here
  bagels: Product[] = [
    {
      id: 1,
      imageUrl: '../../assets/Products/kringlid/Kirsi-sokolaadi kringel.jpg',
      name: 'Cherry-chocolate bagel',
      glutenFree: false,
      lactoseFree: false,
      mainComponents: 'komponendid',
      price: 11,
      keywords: ''
    },
    {
      id: 2,
      imageUrl: '../../assets/Products/kringlid/Pistaatsia-pirni kringel.jpg',
      name: 'Pistachio-pear',
      glutenFree: false,
      lactoseFree: false,
      mainComponents: 'komponendid',
      price: 11,
      keywords: ''
    },
    {
      id: 3,
      imageUrl: '../../assets/Products/kringlid/Pähkli-vaarika-sokolaadi kringel.jpg',
      name: 'Hazelnut-raspberry-chocolate',
      glutenFree: false,
      lactoseFree: false,
      mainComponents: 'komponendid',
      price: 11,
      keywords: ''
    },
    {
      id: 4,
      imageUrl: '../../assets/Products/kringlid/sokolaadikringel.jpg',
      name: 'Chocolate',
      glutenFree: false,
      lactoseFree: false,
      mainComponents: 'komponendid',
      price: 11,
      keywords: ''
    },
    {
      id: 5,
      imageUrl: '../../assets/Products/kringlid/sokolaadi-pähkli kringel.jpg',
      name: 'Chocolate-hazelnut',
      glutenFree: false,
      lactoseFree: false,
      mainComponents: 'komponendid',
      price: 11,

    },
    {
      id: 6,
      imageUrl: '../../assets/Products/kringlid/Singi-juustukringel.jpg',
      name: 'Ham-cheese',
      glutenFree: false,
      lactoseFree: false,
      mainComponents: 'komponendid',
      price: 11,
      keywords: ''
    },

  ]

  sendAllBagels() {
    return this.bagels
  }
}
