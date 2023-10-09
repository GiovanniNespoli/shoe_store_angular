import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppUiModule } from './app-ui.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { StoreListComponentComponent } from './components/store-list-component/store-list-component.component';
import { ShopIconComponentComponent } from './components/shop-icon-component/shop-icon-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { BannerComponentComponent } from './components/banner-component/banner-component.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AllItemsPageComponent } from './pages/all-items-page/all-items-page.component';
import { YourItemsPageComponent } from './pages/your-items-page/your-items-page.component';
import { PromotionsPageComponent } from './pages/promotions-page/promotions-page.component';
import { StoreAllItemsComponent } from './components/store-all-items/store-all-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    AllItemsPageComponent,
    YourItemsPageComponent,
    PromotionsPageComponent,
    HeaderComponentComponent,
    StoreListComponentComponent,
    ShopIconComponentComponent,
    StoreAllItemsComponent,
    BannerComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
