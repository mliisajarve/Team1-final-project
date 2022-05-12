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
  mobileToDesktopDropdown: string = ''
  animation: string = ''
  constructor() {
   }
  
  ngOnInit(): void {
    //default dropdown class value
    this.mobileToDesktopDropdown = 'dropdown-hide'
  }
 
  showSearch() {
    this.isShown = ! this.isShown;
  }

  // if hamburger is clicked / if navbar is opened and cross is clicked
  onHamburger(){
    if(window.screen.width< 525 && this.navbarMobile != 'navbarMobile'){
    this.navbarMobile = 'navbarMobile'
    this.iconImg = 'fa-solid fa-xmark'
    this.animation=  'icon-animation'
    setTimeout(()=>{
      this.animation = ''
    },100)
    } else {
      this.navbarMobile= ''
      this.iconImg = 'fa fa-bars'
      this.animation = 'icon-animation'
      setTimeout(()=>{
        this.animation = ''
      },100)
    }
  }

  // for mobile view resetting, if any link is clicked, then hiding mobile nav, and changing icon back to hamburger
  onResetNavbar(){
    if(window.screen.width< 525){
    this.navbarMobile= ''
    this.iconImg = 'fa fa-bars'
    }
  }
  // if dropdown link is hovered or clicked in mobile view, changing between classes, by default is value dropdown-hide
  onDropdown() {
    if(window.screen.width< 525 && this.mobileToDesktopDropdown != 'mobileDropdown'){
    this.mobileToDesktopDropdown = 'mobileDropdown'
    
    } else if(window.screen.width> 525){
      this.mobileToDesktopDropdown = 'desktopDropdown'
    }
  }
  // if mouse comes out of products list
  leaveDropdown(){
    this.mobileToDesktopDropdown = 'dropdown-hide'
   }
}
