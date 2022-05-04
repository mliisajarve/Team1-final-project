import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onFacebook() {
    window.open('https://www.facebook.com/Sslittlebakery-110912368128050', "_blank")
  }
  onInstagram() {
    window.open('https://www.instagram.com/sslittlebakery/', '_blank')
  }
}
