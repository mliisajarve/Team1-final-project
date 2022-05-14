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
      icon: '../../assets/Icons/circle-check-regular.svg',
      glutenFree: "gluten free",
      lactoseFree: "lactose free",      
      mainComponents: 'Milk, eggs, flour, butter, chocolate powder, cherries',
      price: 11 + " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ''
    },
    {
      id: 2,
      imageUrl: '../../assets/Products/kringlid/Pistaatsia-pirni kringel.jpg',
      name: 'Pistachio - Pear bagel',
      icon: '../../assets/Icons/circle-check-regular.svg',
      glutenFree: "gluten free",
      lactoseFree: "lactose free",      
      mainComponents: 'Milk, eggs, flour, butter, pear compote, pistachios',
      price: 11 + " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ''
    },
    {
      id: 3,
      imageUrl: '../../assets/Products/kringlid/Pähkli-vaarika-sokolaadi kringel.jpg',
      name: 'Hazelnut - raspberry - chocolate bagel',
      icon: '../../assets/Icons/circle-check-regular.svg',
      glutenFree: "gluten free",
      lactoseFree: "lactose free",      
      mainComponents:'eggs, flour, butter, chocolate powder, raspberries, hazelnuts',
      price: 11+ " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ''
    },
    {
      id: 4,
      imageUrl: '../../assets/Products/kringlid/sokolaadikringel.jpg',
      name: 'Chocolate bagel',
      icon: '../../assets/Icons/circle-check-regular.svg',
      glutenFree: "gluten free",
      lactoseFree: "lactose free",      
      mainComponents: 'Milk, eggs, flour, butter, chocolate powder, dark chocolate',
      price: 11+ " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ''
    },
    {
      id: 5,
      imageUrl: '../../assets/Products/kringlid/sokolaadi-pähkli kringel.jpg',
      name: 'Chocolate - hazelnut bagel',
      icon: '../../assets/Icons/circle-check-regular.svg',
      glutenFree: "gluten free",
      lactoseFree: "lactose free",      
      mainComponents: 'Milk, eggs, flour, butter, chocolate powder, hazelnuts',
      price: 11+ " " + "Eur" + " "+ "/" + " " + "Kg",

    },
    {
      id: 6,
      imageUrl: '../../assets/Products/kringlid/Singi-juustukringel.jpg',
      name: 'Ham-cheese bagel',
      icon: '../../assets/Icons/circle-check-regular.svg',
      glutenFree: "gluten free",
      lactoseFree: "lactose free",      
      mainComponents: 'Milk, eggs, flour, butter, ham, cheese',
      price: 11+ " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ''
    },

  ]

  sendAllBagels() {
    return this.bagels
  }
}
