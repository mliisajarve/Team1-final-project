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
      name: 'Cherry - Chocolate bagel',
      glutenFree:  false,
      lactoseFree:  true,
      mainComponents: 'Milk, eggs, flour, butter, chocolate powder, cherries',
      price: 11 + " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ['cherry', 'cherries','chocolate', 'gluten', 'lactose', ]
    },
    {
      id: 2,
      imageUrl: '../../assets/Products/kringlid/Pistaatsia-pirni kringel.jpg',
      name: 'Pistachio - Pear bagel',
      glutenFree: false,
      lactoseFree: false,    
      mainComponents: 'Milk, eggs, flour, butter, pear compote, pistachios',
      price: 11 + " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ['pistacio', 'pear','bagel', 'gluten', 'lactose']
    },
    {
      id: 3,
      imageUrl: '../../assets/Products/kringlid/Pähkli-vaarika-sokolaadi kringel.jpg',
      name: 'Hazelnut - raspberry - chocolate bagel',
      glutenFree:  false,
      lactoseFree:  false,    
      mainComponents:'eggs, flour, butter, chocolate powder, raspberries, hazelnuts',
      price: 11+ " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ['nuts','hazelnut', 'raspberry', 'chocolate', 'gluten', 'lactose']
    },
    {
      id: 4,
      imageUrl: '../../assets/Products/kringlid/sokolaadikringel.jpg',
      name: 'Chocolate bagel',
      glutenFree: true,
      lactoseFree: true,     
      mainComponents: 'Milk, eggs, flour, butter, chocolate powder, dark chocolate',
      price: 11+ " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ['chocolate', 'bagel', 'gluten', 'lactose']
    },
    {
      id: 5,
      imageUrl: '../../assets/Products/kringlid/sokolaadi-pähkli kringel.jpg',
      name: 'Chocolate - hazelnut bagel',
      glutenFree:  true,
      lactoseFree: true,     
      mainComponents: 'Milk, eggs, flour, butter, chocolate powder, hazelnuts',
      price: 11+ " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ['chocolate', 'bagel', 'hazelnut', 'gluten', 'lactose']
    },
    {
      id: 6,
      imageUrl: '../../assets/Products/kringlid/Singi-juustukringel.jpg',
      name: 'Ham-cheese bagel',
      glutenFree: true,
      lactoseFree:  false,
          // lactoseFree: "lactose free",  
      mainComponents: 'Milk, eggs, flour, butter, ham, cheese',
      price: 11+ " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ['salty','cheese', 'ham', 'bagel', 'gluten', 'lactose']
    },

  ]

  sendAllBagels() {
    return this.bagels
  }
}
