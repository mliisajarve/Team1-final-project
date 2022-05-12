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
      glutenFree: true,
      lactoseFree: false,
      mainComponents: 'komponendid',
      price: 12
    },
    {
      id:2,
      imageUrl: '../../assets/Products/saiakesed/Juustusaiake.jpg',
      name: 'Cheese pastry',
      glutenFree: true,
      lactoseFree: false,
      mainComponents: 'komponendid',
      price: 12
    },
    {
      id:3,
      imageUrl: '../../assets/Products/saiakesed/Kirsi-martsipani saiake.jpg',
      name: 'Cherry-martzipan pastry',
      glutenFree: true,
      lactoseFree: false,
      mainComponents: 'komponendid',
      price: 12
    },
    {
      id:4,
      imageUrl: '../../assets/Products/saiakesed/kirsi-sokolaadi muffinid, gluteeni-laktoosivaba.jpg',
      name: 'Cherry-chocolate muffins',
      glutenFree: true,
      lactoseFree: true,
      mainComponents: 'komponendid',
      price: 12
    },
    {
      id:5,
      imageUrl: '../../assets/Products/saiakesed/lehttaigna pirukas (muna,vorsthakkliha).jpg',
      name: 'Egg-meat-sausage puff pastry pie',
      glutenFree: true,
      lactoseFree: false,
      mainComponents: 'komponendid',
      price: 12
    },
    {
      id:6,
      imageUrl: '../../assets/Products/saiakesed/Muretaignakorvikesed sidrunikreemi ja sefiiriga.jpg',
      name: 'Shortbread baskets with lemoncream',
      glutenFree: true,
      lactoseFree: false,
      mainComponents: 'komponendid',
      price: 12
    },
    {
      id:7,
      imageUrl: '../../assets/Products/saiakesed/porgandimuffinid, laktoosi-gluteeni vabad.jpg',
      name: 'Carrot muffins',
      glutenFree: true,
      lactoseFree: true,
      mainComponents: 'komponendid',
      price: 12
    },
    {
      id:8,
      imageUrl: '../../assets/Products/saiakesed/sidrunitoorjuustu koogi korvike, sefiiriga.jpg',
      name: 'Raw cheese and lemon basket',
      glutenFree: true,
      lactoseFree: false,
      mainComponents: 'komponendid',
      price: 12
    },
    {
      id:9,
      imageUrl: '../../assets/Products/saiakesed/Tuuletaskud.jpg',
      name: 'Profiterole',
      glutenFree: true,
      lactoseFree: false,
      mainComponents: 'komponendid',
      price: 12
    },
  ]
  constructor() { }

  sendAllPastries() {
    return this.pastries
  }
}
