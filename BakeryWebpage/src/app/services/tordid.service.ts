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
      glutenFree: "gluten free",
      lactoseFree: "lactose free",
      mainComponents: 'flour, eggwhite, milk, butter, cream cheese, orange',
      price: 10 + " " + "Eur" + " "+ "/" + " " + "Kg", 
      keywords: ''
  },
   {  
      id: 2,
      imageUrl: '../../assets/Products/tordid/Blondie, gluteeni-laktoosivaba.jpg',
      name: 'Blondie cake',
      glutenFree: "gluten free",
      lactoseFree: "lactose free",
      mainComponents: 'flour, eggs, butter, cocoa powder, dark chocolate',
      price: 10 + " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ''
  },
   {  
      id: 3,
      imageUrl: '../../assets/Products/tordid/Kohvikook_apelsinikook.jpg',
      name: 'Coffee & Orange cake',
      glutenFree: "gluten free",
      lactoseFree: "latose free",
      mainComponents: 'flour, egg, butter, sour cream, orange, coffee extract',
      price: 10 + " " + "Eur" + " "+ "/" + " " + "Kg" ,
      keywords: ''
  },
   {  
      id: 4,
      imageUrl: '../../assets/Products/tordid/küpsisetort.jpg',
      name: 'Biscuit cake',
      glutenFree: "gluten free",
      lactoseFree: "lactose free",
      mainComponents: 'biscuites, sour cream, whipped cream ',
      price: 10 + " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ''
  },
   {  
      id: 5,
      imageUrl: '../../assets/Products/tordid/linnupiimatort.jpg',
      name: 'Milk souffle (Linnupiim) cake',
      glutenFree: "gluten free",
      lactoseFree: "lactose free",
      mainComponents: 'flour, eggs, butter, cocoa powder, milk, whipped cream',
      price: 10 + " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ''
  },
   {  
      id: 6,
      imageUrl: '../../assets/Products/tordid/MAASIKATORT.jpg',
      name: 'Strawberry cake',
      glutenFree: "gluten free",
      lactoseFree: "lactose free",
      mainComponents: 'flour, eggs, butter, cream cheese, strawberries',
      price: 10 + " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ''
  },
   {  
      id: 7,
      imageUrl: '../../assets/Products/tordid/Mustika tort- laktoosi,gluteeni vaba.jpg',
      name: 'Blueberry cake',
      glutenFree: "gluten free",
      lactoseFree: "lactose free",
      mainComponents: 'flour, eggs, butter, cream cheese, blueberries',
      price: 10 + " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ''
  },
   {  
      id: 8,
      imageUrl: '../../assets/Products/tordid/vanillitort.jpg',
      name: 'Vanilla cake',
      glutenFree: "gluten free",
      lactoseFree: "lactose free",
      mainComponents: 'flour, eggs, milk, butter, whipped cream, vanilla extact',
      price: 10 + " " + "Eur" + " "+ "/" + " " + "Kg",
      keywords: ''
  },


 ]
  constructor() { }

  sendAllCakes(){
    return this.cakes

  }
}
