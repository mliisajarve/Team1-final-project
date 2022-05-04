
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TordidComponent } from './tordid/tordid.component';
import { KringlidComponent } from './kringlid/kringlid.component';
import { SaiakesedComponent } from './saiakesed/saiakesed.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    ContactPageComponent,
    ContactFormComponent,
    OrderFormComponent,
    SocialMediaComponent,
    TordidComponent,
    KringlidComponent,
    SaiakesedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
