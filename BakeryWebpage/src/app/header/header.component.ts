import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarMobile: string = ''
  dropdownStatus = 'dropdown-content';
  isShown: boolean = false;
  iconImg: string = 'fa fa-bars'

  constructor() {
   }
  
  ngOnInit(): void {
  }
 
  showSearch() {
    this.isShown = ! this.isShown;
  }
  onHamburger(){
    if(window.screen.width< 525 && this.navbarMobile != 'navbarMobile'){
    this.navbarMobile = 'navbarMobile'
    this.iconImg = 'fa-solid fa-xmark'
    } else {
      this.navbarMobile= ''
      this.iconImg = 'fa fa-bars'
    }
  }
  onAnyWhere(){
    if(window.screen.width< 525)
    this.navbarMobile= ''
    this.iconImg = 'fa fa-bars'
  }
  
}
