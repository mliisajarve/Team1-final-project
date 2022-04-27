import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

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
