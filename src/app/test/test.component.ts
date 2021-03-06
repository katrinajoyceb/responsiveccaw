import { Component, OnInit, Input } from '@angular/core';
import { WORKS, Works} from '../portfolio/works';
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
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  animations: [
    trigger('lastClicked', [
      state('clicked', style({
       
      
        color: ' #FFFFFF',
        background: '#FF8000',
      })),
      state('notClicked', style({
     
        color: ' #000000',
        background: '#FFFFFF',
        
        
      })),
      transition('clicked => notClicked', [
        animate('0.2s')
      ]),
      transition('notClicked => clicked', [
        animate('0.2s')
      ]),
    ]),
    trigger('lastText', [
      state('clicked', style({
       
        display: 'block'
      })),
      state('notClicked', style({
        display: 'none'
        
        
      })),
      transition('clicked => notClicked', [
        animate('0.2s')
      ]),
      transition('notClicked => clicked', [
        animate('0.2s')
      ]),
    ])
  ]
})

export class TestComponent implements OnInit {
  works = WORKS;

  nfsb: Works = this.works[0];
  llano: Works = this.works[1];
  farming: Works = this.works[2];

  selectedWork =  this.nfsb;

  nfsbdiv: boolean = true;
  llanodiv: boolean = false;
  farmingdiv: boolean = false;
  
  about: boolean = true;
  solution: boolean = false;
  problem: boolean = false;
  aboutmobile: boolean = false;

  mobile: boolean = false;



  public myClass: string = 'nfsbdiv';

  constructor() { 
  }

  ngOnInit() {}

  show(work: string){
   
    if(work === 'nfsb'){
      this.selectedWork  = this.nfsb;
      this.myClass = 'nfsbdiv';
      this.nfsbdiv = true;
      this.llanodiv = false;
      this.farmingdiv = false;
      this.about = true;
      this.details("about");
      console.log("nfsb");
    }
    else if(work === 'llano'){
      this.selectedWork = this.llano;
      this.myClass = 'llanodiv';
      this.nfsbdiv = false;
      this.llanodiv = true;
      this.farmingdiv = false;
      this.details("about");
      console.log("llano");
    }
    else if(work === 'farming'){
      this.selectedWork = this.farming;
      this.myClass = 'farmingdiv';
      this.nfsbdiv = false;
      this.llanodiv = false;
      this.farmingdiv = true;
      this.details("about");
      console.log("farming");
    }

    console.log("Selected Work" + this.selectedWork);
  
  }

  details(choice: string){

    if(choice === 'about'){
      this.about = true;
      this.solution = false;
      this.problem = false;
    }
    else if(choice === 'solution'){
      this.about = false;
      this.solution = true;
      this.problem = false;
    }
    else if(choice === 'problem'){
      this.about = false;
      this.solution = false;
      this.problem = true;
    }

  }

  
  detailsxl(choice: string){


    if(choice === 'about'){
      this.aboutmobile = !this.aboutmobile;
      this.solution = false;
      this.problem = false;
     
    }
    else if(choice === 'solution'){
      this.aboutmobile = false;
      this.solution = !this.solution;
      this.problem = false;
    }
    else if(choice === 'problem'){
      this.aboutmobile = false;
      this.solution = false;
      this.problem = !this.problem;
    }


  }

 
}
