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
      name: 'Blondie',
      glutenFree: true,
      lactoseFree: false,
      mainComponents: 'komponendid ',
      price: 10
  },
   {  
      id: 3,
      imageUrl: '../../assets/Products/tordid/Kohvikook_apelsinikook.jpg',
      name: 'Kohvi-apelsinikook',
      glutenFree: true,
      lactoseFree: false,
      mainComponents: 'komponendid ',
      price: 10
  },
   {  
      id: 4,
      imageUrl: '../../assets/Products/tordid/küpsisetort.jpg',
      name: 'KÜpsisetort',
      glutenFree: true,
      lactoseFree: false,
      mainComponents: 'komponendid ',
      price: 10
  },
   {  
      id: 5,
      imageUrl: '../../assets/Products/tordid/linnupiimatort.jpg',
      name: 'Linnupiimatort',
      glutenFree: true,
      lactoseFree: false,
      mainComponents: 'komponendid ',
      price: 10
  },
   {  
      id: 6,
      imageUrl: '../../assets/Products/tordid/MAASIKATORT.jpg',
      name: 'Maasikatort',
      glutenFree: true,
      lactoseFree: false,
      mainComponents: 'komponendid ',
      price: 10
  },
   {  
      id: 7,
      imageUrl: '../../assets/Products/tordid/Mustika tort- laktoosi,gluteeni vaba.jpg',
      name: 'Mustika tort- laktoosi,gluteeni vaba',
      glutenFree: true,
      lactoseFree: false,
      mainComponents: 'komponendid ',
      price: 10
  },
   {  
      id: 8,
      imageUrl: '../../assets/Products/tordid/vanillitort.jpg',
      name: 'Vanillitort',
      glutenFree: true,
      lactoseFree: false,
      mainComponents: 'komponendid ',
      price: 10
  },


 ]
  constructor() { }

  sendAllCakes(){
    return this.cakes

  }
}
