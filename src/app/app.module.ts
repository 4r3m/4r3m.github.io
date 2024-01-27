import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { RedundantButtonComponent } from './utilities/redundant-button/redundant-button.component';
import { ReusableCarouselComponent } from './portfolio/reusable-carousel/reusable-carousel.component';
import { ReusableCarousel1Component } from './portfolio/reusable-carousel1/reusable-carousel1.component';
import { ReusableCarousel3Component } from './portfolio/reusable-carousel3/reusable-carousel3.component';
import { ReusableCarousel4Component } from './portfolio/reusable-carousel4/reusable-carousel4.component';
import { ReusableCarousel5Component } from './portfolio/reusable-carousel5/reusable-carousel5.component';
import { ReusableCarousel6Component } from './portfolio/reusable-carousel6/reusable-carousel6.component';
import { ReusableCarousel7Component } from './portfolio/reusable-carousel7/reusable-carousel7.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    RedundantButtonComponent,
    ReusableCarouselComponent,
    ReusableCarousel1Component,
    ReusableCarousel3Component,
    ReusableCarousel4Component,
    ReusableCarousel5Component,
    ReusableCarousel6Component,
    ReusableCarousel7Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
