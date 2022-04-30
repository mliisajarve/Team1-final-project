import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  images = [
    { path: '../../assets/images/Bagel.png' },
    { path: '../../assets/images/Pastry.png' },
    { path: '../../assets/images/Strawberry-cake.png' },
    { path: '../../assets/images/Banana-bread.png' },
    { path: '../../assets/images/Tuuletaskud.png' },
    { path: '../../assets/images/cookies.png' },
    { path: '../../assets/images/berries.png' },
    { path: '../../assets/images/cake-with-topler.png' },
    { path: '../../assets/images/carrot-muffins.png' },
    { path: '../../assets/images/Chocolate-cake.png' },
    { path: '../../assets/images/pink-toping-pastry.png' },
    { path: '../../assets/images/quiche.png' },
    { path: '../../assets/images/salty-stritsel.png' },
    { path: '../../assets/images/two-cake.png' },
    { path: '../../assets/images/vastlakukkel.png' }
  ];
}