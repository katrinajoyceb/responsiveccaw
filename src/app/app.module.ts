import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { TypewriterComponent } from './typewriter/typewriter.component';
import { TestComponent } from './test/test.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AboutComponent } from './about/about.component';
import { WireframesComponent } from './wireframes/wireframes.component';
import { PhoneComponent } from './phone/phone.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PackagesComponent } from './packages/packages.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    TypewriterComponent,
    TestComponent,
    AboutComponent,
    WireframesComponent,
    PhoneComponent,
    PortfolioComponent,
    TestimonialsComponent,
    PackagesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
