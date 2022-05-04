import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   
dropdownStatus = 'dropdown-content';

  constructor() { }

  ngOnInit(): void {
  }

  onProducts() {
   if(this.dropdownStatus == 'dropdown-content') {
     this.dropdownStatus = 'dropdown-show';
   } else {
     this.dropdownStatus = 'dropdown-content';
   }
  }

  /* hideShowNav() : void {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } */

}
