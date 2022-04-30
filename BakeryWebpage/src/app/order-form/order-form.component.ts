import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  name: string = '';
  email: string = ''
  number: number|string = ''
  someFieldEmpty: boolean = false
  sendStatus: string = 'Send'
  
  optionCakes: boolean = false
  category = [{name: 'Please choose category'},{name: 'Cake'}, {name: 'Pretzels'}, {name: 'Rolls'}]
  cakeSelection = [{name: 'Kook1'}, {name: 'Kook2'}, {name: 'Kook3'}]
  cakes: string ='' // needs model and service sheet to import all cakes
  pretzels: string =''
  rolls: string = ''
  constructor() { }

  ngOnInit(): void {
  }
onOrderSubmit() {

}
onLoadSelected(selected:any) {
alert(selected.value)
if(selected.value === 'Cake') {
  this.optionCakes= true
} 
}
onLoadAllPretzels() {

}
onLoadAllRolls() {

}
}
