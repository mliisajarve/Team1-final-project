import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KringlidService } from './services/kringlid.service';
import { SaiakesedService } from './services/saiakesed.service';
import { TordidService } from './services/tordid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BakeryWebpage';
  inputValue2: any;
  isShown: boolean = false;

  constructor(
    private router: Router,
    private allbagels: KringlidService,
    private allcakes: TordidService, 
    private allpastry: SaiakesedService) {
  }

  onActivate(event:any) {
    window.scroll(0,0);
  }

  onSearch(searchText:string) {
    console.log(searchText)
    /* this.inputValue2 = searchText; */
    this.isShown = ! this.isShown;
    
    /* const found = this.allbagels.sendAllBagels().find(allbagels => allbagels.keywords.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) */
    let found = this.allbagels.sendAllBagels();
    let result = found.forEach(element => element);
    /* let last = result.forEach(element =>element.name); */
    console.log(found)
    /* if(found) {
      this.inputValue2 = found
    } else {
      this.inputValue2 = "Result not found"
      return
    } */
  }

  hide() {
    this.inputValue2 = "";
  }


}
