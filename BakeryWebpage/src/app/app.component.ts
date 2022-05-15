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
  searchKey: any;
  isShown: boolean = false;

  constructor(
    private router: Router,
    private allbagels: KringlidService,
    private allcakes: TordidService,
    private allpastry: SaiakesedService) {
  }

  onActivate(event: any) {
    window.scroll(0, 0);

  }

  onSearch(searchText: string) {

    this.isShown = !this.isShown;
    /* this.inputValue2 = searchText */

    let foundBagels = this.allbagels.sendAllBagels();
    let foundCakes = this.allcakes.sendAllCakes()
    let foundPastry = this.allpastry.sendAllPastries()
    let all = [foundBagels, foundCakes, foundPastry]


    for (let index = 0; index < all.length; index++) {
      const allElements = all[index];

      for (let index = 0; index < allElements.length; index++) {
        const element = allElements[index].keywords;
        for (let index = 0; index < element.length; index++) {
          const valueElement = element[index];
          console.log(valueElement)
        }
      
      }
    }

  }

/*   const found = this.contacts.find(contact => contact.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    console.log(found)
    if(found) {
      this.contactDetails = `The contact is ${found.name} -- ${found.number}`
    } else {
      this.contactDetails = "Result not found"
      return
    }
  } */
  hide() {
    this.inputValue2 = "";
  }


}
