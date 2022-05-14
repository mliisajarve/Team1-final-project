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
      glutenFree: "gluten free",
      lactoseFree: "lactose free",      
      mainComponents: 'flour, eggs, butter, whipped cream, butter, cocoa powder',
      price: 12 + " " + "Eur" + " "+ "/" + " " + "Kg"
    },
    {
      id:2,
      imageUrl: '../../assets/Products/saiakesed/Juustusaiake.jpg',
      name: 'Cheese roll',
      glutenFree: "gluten free",
      lactoseFree: "lactose free",      
      mainComponents: 'flour, milk, eggs, butter, yeast, cheese',
      price: 12 + " " + "Eur" + " "+ "/" + " " + "Kg"
    },
    {
      id:3,
      imageUrl: '../../assets/Products/saiakesed/Kirsi-martsipani saiake.jpg',
      name: 'Cherry - martzipan roll',
      glutenFree: "gluten free",
      lactoseFree: "lactose free",
            mainComponents: 'flour, eggs, butter, almond flour, cherries',
      price: 12 + " " + "Eur" + " "+ "/" + " " + "Kg"
    },
    {
      id:4,
      imageUrl: '../../assets/Products/saiakesed/kirsi-sokolaadi muffinid, gluteeni-laktoosivaba.jpg',
      name: 'Cherry - chocolate muffins',
      glutenFree: "gluten free",
      lactoseFree: "lactose free",
      mainComponents: 'flour, eggs, butter, cream cheese, cocoa powder',
      price: 12 + " " + "Eur" + " "+ "/" + " " + "Kg"
    },
    {
      id:5,
      imageUrl: '../../assets/Products/saiakesed/lehttaigna pirukas (muna,vorsthakkliha).jpg',
      name: 'Egg - meat - sausage puff pastry pie',
      glutenFree: "gluten free",
      lactoseFree: "lactose free",
      mainComponents: 'flour, eggs, butter, sausage, minced meat',
      price: 12 + " " + "Eur" + " "+ "/" + " " + "Kg"
    },
    {
      id:6,
      imageUrl: '../../assets/Products/saiakesed/Muretaignakorvikesed sidrunikreemi ja sefiiriga.jpg',
      name: 'Shortbread tarts with lemon cream',
      glutenFree: "gluten free",
      lactoseFree: "lactose free",
      mainComponents: 'flour, eggs, butter, cream cheese, cocoa powder',
      price: 12 + " " + "Eur" + " "+ "/" + " " + "Kg"
    },
    {
      id:7,
      imageUrl: '../../assets/Products/saiakesed/porgandimuffinid, laktoosi-gluteeni vabad.jpg',
      name: 'Carrot muffins',
      glutenFree: "gluten free",
      lactoseFree: "lactose free",
      mainComponents: 'flour, eggs, whipped cream, cream cheese, carrot juice',
      price: 12 + " " + "Eur" + " "+ "/" + " " + "Kg"
    },
    {
      id:8,
      imageUrl: '../../assets/Products/saiakesed/sidrunitoorjuustu koogi korvike, sefiiriga.jpg',
      name: 'Cream cheese & lemon tart',
      glutenFree: "gluten free",
      lactoseFree: "lactose free",
      mainComponents: 'flour, eggs, butter, cream cheese, cocoa powder, lemon peel',
      price: 12 + " " + "Eur" + " "+ "/" + " " + "Kg"
    },
    {
      id:9,
      imageUrl: '../../assets/Products/saiakesed/Tuuletaskud.jpg',
      name: 'Profiterole',
      glutenFree: "gluten free",
      lactoseFree: "lactose free",
      mainComponents: 'flour, eggs, milk, whipped cream, cocoa powder',
      price: 12 + " " + "Eur" + " "+ "/" + " " + "Kg"
    },
  ]
  constructor() { }

  sendAllPastries() {
    return this.pastries
  }
}
