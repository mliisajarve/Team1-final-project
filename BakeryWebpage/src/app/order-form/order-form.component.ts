import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

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

  category = [{name: 'Please choose category'},{name: 'Cakes'}, {name: 'Pretzels'}, {name: 'Rolls'}]
  isCategorySelected: boolean = false
  cakePretzelRolls: any
  
  /* cakes: string ='' // needs model and service sheet to import all cakes
  pretzels: string =''
  rolls: string = '' */
  constructor() { }

  ngOnInit(): void {
  }
public onOrderSubmit(e:Event) {
  if(this.name && this.email && this.selCategory && this.date && this.amount !== '') {
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

onLoadSelected(selected:any) {
 this.isCategorySelected = true
switch(selected.value) {
  case 'Cakes' :
    this.cakePretzelRolls = [{name: 'Kook1'}, {name: 'Kook2'}, {name: 'Kook3'}]
    alert(this.cakePretzelRolls.name)
    break;
  case 'Pretzels' :
     this.cakePretzelRolls = [{name:'Kringel1'}, {name:'Kringel2'}, {name:'Kringel3'}]
     break;
  case 'Rolls' :
    this.cakePretzelRolls = [{name:'Saiake1'}, {name:'Saiake2'}, {name:'Saiake3'}]
    break;
}


}
}
