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
  animations: [
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  page: string; 
  condition: boolean = true;
  aboutus = 'Caprock Custom Applications was founded in 2014, when we realized that too many technology companies lose focus on the customer during the application development process. We specialize in collaborating with our customers to design mobile apps and software solutions that best fit their needs. We incorporate a client-driven philosophy and implement the latest technologies to deliver innovative, responsive, and cost-effective solutions.';  
  constructor() { }

  ngOnInit() {
  }


  goTeam(){
    this.condition = !this.condition;
    this.page = "team";
  }

  goBack(){
    
    this.condition = !this.condition;
  }
  


}
