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
      imageUrl: '../../assets/Products/saiakesed/Ekleerid.jpg',
      name: 'Eclair',
      glutenFree:  true,
      lactoseFree:  true,     
      mainComponents: 'flour, eggs, whipped cream, butter, cocoa powder',
      price: 12 + " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ['eclair', 'cocoa','whipped', 'gluten', 'lactose']
    },
    {
      id:2,
      imageUrl: '../../assets/Products/saiakesed/Juustusaiake.jpg',
      name: 'Cheese roll',
      glutenFree:  true,
      lactoseFree:  true,     
      mainComponents: 'flour, milk, eggs, butter, yeast, cheese',
      price: 12 + " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ['cheese', 'yeast', 'gluten', 'lactose']
    },
    {
      id:3,
      imageUrl: '../../assets/Products/saiakesed/Kirsi-martsipani saiake.jpg',
      name: 'Cherry - martzipan roll',
      glutenFree: true,
      lactoseFree:  true,
      mainComponents: 'flour, eggs, butter, almond flour, cherries',
      price: 12 + " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ['cherry', 'almond','marzipan', 'gluten', 'lactose']
    },
    {
      id:4,
      imageUrl: '../../assets/Products/saiakesed/kirsi-sokolaadi muffinid, gluteeni-laktoosivaba.jpg',
      name: 'Cherry - chocolate muffins',
      glutenFree:  true,
      lactoseFree:  true,
      mainComponents: 'flour, eggs, butter, cream cheese, cocoa powder',
      price: 12 + " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ['cherry', 'chocolate','muffin', 'gluten', 'lactose']
    },
    {
      id:5,
      imageUrl: '../../assets/Products/saiakesed/lehttaigna pirukas (muna,vorsthakkliha).jpg',
      name: 'Egg - meat - sausage puff pastry pie',
      glutenFree:  true,
      lactoseFree:  true,
      mainComponents: 'flour, eggs, butter, sausage, minced meat',
      price: 12 + " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ['salty', 'cheese','meat', 'sausage', 'gluten', 'lactose']
    },
    {
      id:6,
      imageUrl: '../../assets/Products/saiakesed/Muretaignakorvikesed sidrunikreemi ja sefiiriga.jpg',
      name: 'Shortbread tarts with lemon cream',
      glutenFree: true,
      lactoseFree:  true,
      mainComponents: 'flour, eggs, butter, cream cheese, cocoa powder',
      price: 12 + " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ['lemon', 'cream cheese','shortbread', 'gluten', 'lactose']
    },
    {
      id:7,
      imageUrl: '../../assets/Products/saiakesed/porgandimuffinid, laktoosi-gluteeni vabad.jpg',
      name: 'Carrot muffins',
      glutenFree:  true,
      lactoseFree:  true,
      mainComponents: 'flour, eggs, whipped cream, cream cheese, carrot juice',
      price: 12 + " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ['carrot', 'muffin', 'gluten', 'lactose']
    },
    {
      id:8,
      imageUrl: '../../assets/Products/saiakesed/sidrunitoorjuustu koogi korvike, sefiiriga.jpg',
      name: 'Cream cheese & lemon tart',
      glutenFree:  true,
      lactoseFree:  true,
      mainComponents: 'flour, eggs, butter, cream cheese, cocoa powder, lemon peel',
      price: 12 + " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ['lemon', 'cream cheese', 'cocoa', 'chocolate', 'gluten', 'lactose']
    },
    {
      id:9,
      imageUrl: '../../assets/Products/saiakesed/Tuuletaskud.jpg',
      name: 'Profiterole',
      glutenFree: true,
      lactoseFree: true,
      mainComponents: 'flour, eggs, milk, whipped cream, cocoa powder',
      price: 12 + " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ['cocoa', 'profiterole', 'gluten', 'lactose']
    },
  ]
  constructor() { }

  sendAllPastries() {
    return this.pastries
  }
}
