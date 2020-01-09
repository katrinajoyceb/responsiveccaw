import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { TypewriterComponent } from './typewriter/typewriter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AboutComponent } from './about/about.component';
import { WireframesComponent } from './wireframes/wireframes.component';
import { PhoneComponent } from './phone/phone.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PackagesComponent } from './packages/packages.component';
import { ContactComponent } from './contact/contact.component';
import { AnimateComponent } from './animate/animate.component';
import { TestComponent } from './test/test.component';
import { TeamComponent } from './team/team.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    TypewriterComponent,
    AboutComponent,
    WireframesComponent,
    PhoneComponent,
    PortfolioComponent,
    TestimonialsComponent,
    PackagesComponent,
    ContactComponent,
    AnimateComponent,
    TestComponent,
    TeamComponent,
   
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
