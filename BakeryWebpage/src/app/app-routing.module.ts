import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { KringlidComponent } from './kringlid/kringlid.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SaiakesedComponent } from './saiakesed/saiakesed.component';
import { TordidComponent } from './tordid/tordid.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'home', component: MainPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'cakes', component: TordidComponent},
  {path: 'bagels', component: KringlidComponent},
  {path: 'pastry', component: SaiakesedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
