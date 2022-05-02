import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  formOption: boolean = false
  buttonClicked: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  onOrderButton() {
    this.formOption = false
    this.buttonClicked =  true
  }

  onContactButton(){
    this.formOption = true
    this.buttonClicked = true
  }
  
}
