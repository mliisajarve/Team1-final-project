import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { KringlidComponent } from './kringlid/kringlid.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SaiakesedComponent } from './saiakesed/saiakesed.component';
import { SearchOutcomePageComponent } from './search-outcome-page/search-outcome-page.component';
import { StickyButtonComponent } from './sticky-button/sticky-button.component';
import { TordidComponent } from './tordid/tordid.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'home', component: MainPageComponent},
  {path: 'products', component: ProductsPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'cakes', component: TordidComponent},
  {path: 'bagels', component: KringlidComponent},
  {path: 'pastry', component: SaiakesedComponent},
  {path: 'result', component: SearchOutcomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}