import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  group,
  query,
  sequence,
  stagger,
  animation,
  useAnimation,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-about',
  animations: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  page: string; 
  condition: boolean = true;
  constructor() { }

  ngOnInit() {}

  goTeam(){
    this.condition = !this.condition;
    this.page = "team";
  }

  goBack(){
    this.condition = !this.condition;
  }
  
}
