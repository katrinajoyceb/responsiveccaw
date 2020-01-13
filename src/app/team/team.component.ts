import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
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
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  animations: [
    trigger('showHide', [
      // ...
      state('show', style({
        height: '500px',
        opacity: 1,
        backgroundColor: 'yellow',
        transform: 'translateX(0)'
      })),
      state('hide', style({
        height: '500px',
        opacity: 1,
        backgroundColor: 'green',
        transform: 'translateX(100%)',
        
      
      })),
      transition('show => hide', [
       
        animate('1s')
      ]),
      transition('hide => show', [
        animate('1s')
      ]),
    ]),

    trigger('openClose', [
     // ...
     state('open', style({
      
       width:'100%',
       opacity: 1,
      
       
       
      
     })),
     state('close', style({
      
       width:'225px',
       opacity: 1,
       transform: 'translateX(0)',

     })),
     transition('open => close', [
      
       animate('0.5s')
     ]),
     transition('close => open', [
       animate('1s')
     ]),
   ]),
  
  
 ]
})
export class TeamComponent implements OnInit {

  team: boolean;
  about: boolean;
  details: boolean;
  public myClass: string;
  isOpen = false;
  name: string;


  constructor(private aboutService: AboutService) { }

  ngOnInit() {
  }

  goAbout(){
    this.aboutService.goAbout();
    this.team = this.aboutService.team;
    this.about = this.aboutService.about;
    this.details = this.aboutService.details;
  }

  goDetails(name: string){
    this.aboutService.goDetails();
    this.name = name;
    this.team = this.aboutService.team;
    this.about = this.aboutService.about;
    this.details = this.aboutService.details;
    this.myClass = name + 'det';
    this.isOpen = !this.isOpen;
    console.log(name);
  }

  goTeam(){
    this.aboutService.goTeam();
    this.team = this.aboutService.team;
    this.about = this.aboutService.about;
    this.details = this.aboutService.details;
    this.isOpen = !this.isOpen;
  }

}
