import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AllItemsPageComponent } from './pages/all-items-page/all-items-page.component';
import { PromotionsPageComponent } from './pages/promotions-page/promotions-page.component';
import { YourItemsPageComponent } from './pages/your-items-page/your-items-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'all-items',
    component: AllItemsPageComponent,
  },
  {
    path: 'promotions',
    component: PromotionsPageComponent,
  },
  {
    path: 'your-bag',
    component: YourItemsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
