import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  headline = " We design mobile apps for business owners and entrepreneurs looking to improve efficiency, save time and money, and turn their ideas into reality";


  constructor() { }

  ngOnInit() {
  }

}
