import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BakeryWebpage';
  inputValue2: string = "";
  isShown: boolean = false;

  constructor(private router: Router) {
  }


  onActivate(event:any) {
    window.scroll(0,0);
  }

  onSearch(searchText:string):void {
    console.log(searchText)
    this.inputValue2 = searchText;
    this.isShown = ! this.isShown;
  }


}
