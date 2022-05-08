import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class TordidService {
  //all product data will be presented here
 cakes: Product[] = [
   {  
      id: 1,
      imageUrl: '../../assets/Products/tordid/apelsinitort.jpg',
      name: 'Orange cake',
      glutenFree: false,
      lactoseFree: false,
      mainComponents: 'komponendid ',
      price: 10, 
      keywords: ''
  },
   {  
      id: 2,
      imageUrl: '../../assets/Products/tordid/Blondie, gluteeni-laktoosivaba.jpg',
      name: 'Blondie cake',
      glutenFree: true,
      lactoseFree: true,
      mainComponents: 'komponendid ',
      price: 10,
      keywords: ''
  },
   {  
      id: 3,
      imageUrl: '../../assets/Products/tordid/Kohvikook_apelsinikook.jpg',
      name: 'Coffee-orange cake',
      glutenFree: false,
      lactoseFree: false,
      mainComponents: 'komponendid ',
      price: 10,
      keywords: ''
  },
   {  
      id: 4,
      imageUrl: '../../assets/Products/tordid/küpsisetort.jpg',
      name: 'Cookie cake',
      glutenFree: false,
      lactoseFree: false,
      mainComponents: 'komponendid ',
      price: 10,
      keywords: ''
  },
   {  
      id: 5,
      imageUrl: '../../assets/Products/tordid/linnupiimatort.jpg',
      name: 'Bird milk cake',
      glutenFree: false,
      lactoseFree: false,
      mainComponents: 'komponendid ',
      price: 10,
      keywords: ''
  },
   {  
      id: 6,
      imageUrl: '../../assets/Products/tordid/MAASIKATORT.jpg',
      name: 'Strawberry cake',
      glutenFree: false,
      lactoseFree: false,
      mainComponents: 'komponendid ',
      price: 10,
      keywords: ''
  },
   {  
      id: 7,
      imageUrl: '../../assets/Products/tordid/Mustika tort- laktoosi,gluteeni vaba.jpg',
      name: 'Blueberry cake',
      glutenFree: true,
      lactoseFree: true,
      mainComponents: 'komponendid ',
      price: 10,
      keywords: ''
  },
   {  
      id: 8,
      imageUrl: '../../assets/Products/tordid/vanillitort.jpg',
      name: 'Vanilla cake',
      glutenFree: false,
      lactoseFree: false,
      mainComponents: 'komponendid ',
      price: 10,
      keywords: ''
  },


 ]
  constructor() { }

  sendAllCakes(){
    return this.cakes

  }
}
