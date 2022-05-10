import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   
dropdownStatus = 'dropdown-content';

  isShown: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showSearch() {
    this.isShown = ! this.isShown;
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
