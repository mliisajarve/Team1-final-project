
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
import { SingleProductComponent } from './single-product/single-product.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { StickyButtonComponent } from './sticky-button/sticky-button.component';
import { SearchOutcomePageComponent } from './search-outcome-page/search-outcome-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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
    SaiakesedComponent,
    SingleProductComponent,
    FeedbackComponent,
    ProductsPageComponent,
    SearchInputComponent,
    StickyButtonComponent,
    SearchOutcomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IvyCarouselModule,
    FontAwesomeModule,
    
  ],
  providers: [SearchInputComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
