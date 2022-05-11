import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-sticky-button',
  templateUrl: './sticky-button.component.html',
  styleUrls: ['./sticky-button.component.css']
})
export class StickyButtonComponent implements OnInit {
  formOption: boolean = false
  buttonClicked: boolean = false
  @Input() hero: any

  constructor() { }

  ngOnInit(): void {
  }
  onOrderButton() {
    this.formOption = false
    this.buttonClicked =  true
  }

}
