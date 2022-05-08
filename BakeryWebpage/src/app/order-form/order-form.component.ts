import { Component, Input, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Product } from '../models/product';
import { KringlidService } from '../services/kringlid.service';
import { SaiakesedService } from '../services/saiakesed.service';
import { TordidService } from '../services/tordid.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  name: string = '';
  email: string = ''
  number: number|string = ''
  selCategory: string = ''
  selProduct: string = ''
  amount: number| string = ''
  info: string = ''
  date: number|string = ''

  hideForm: string = ''
  someFieldEmpty: boolean = false
  sendStatus: string = 'Send'

  category = [{name: '--------'},{name: 'Cakes'}, {name: 'Bagels'}, {name: 'Pastry'}]
  isCategorySelected: boolean = false
  cakePretzelRolls: any
  

  constructor(private allCakeNames: TordidService, private allBagelNames: KringlidService, private allPastryNames: SaiakesedService) { }

  ngOnInit(): void {
  }
  
public onOrderSubmit(e:Event) {
  
  if(this.name && this.email && this.selCategory && this.selProduct && this.date && this.amount !== '' ) {
    this.sendStatus = 'Sending...'
    emailjs.sendForm('service_v9cqahs','template_ayeznks', e.target as HTMLFormElement, 'QklSpd4CPoE0j1orE')
    .then((result: EmailJSResponseStatus) => {
      if(result.text === 'OK') {
        this.hideForm = "hidden"
      }
    })
  } else {
    this.someFieldEmpty = true
    setTimeout(()=> {
      this.someFieldEmpty = false
    }, 3000)
  }
}

// getting all product names from service sheets
onLoadSelected(selected:any) {
 this.isCategorySelected = true
switch(selected.value) {
  case 'Cakes' :
    this.cakePretzelRolls = this.allCakeNames.sendAllCakes()
    break;
  case 'Bagels' :
     this.cakePretzelRolls = this.allBagelNames.sendAllBagels()
     break;
  case 'Pastry' :
    this.cakePretzelRolls = this.allPastryNames.sendAllPastries()
    break;
}
return this.cakePretzelRolls 

}


}
