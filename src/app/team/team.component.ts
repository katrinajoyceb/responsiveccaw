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

  abouttext: Object = null;

  teamtext: {first: string, last: string, school: string, about: string, hobbies: string}[] = [
    { 
      first: "nat",
      last: "joyner",
      school: "",
      about: " Do I like standing on litter because I sit when I have spaces, my cat buddies have no litter. I live in luxury cat life lick the plastic bag.",
      hobbies: "",
      
    },
    { 
      first: "ethan",
      last: "eckstein",
      school: "Ethan graduated from Lubbock Christian University in 2008 with a Bachelor's Degree in Computer Information Systems.",
      about: "When Ethan started working in the industry full time, he realized that he really enjoyed designing the user interface of mobile and web applications. Ethan is continuously learning new ways to design apps and try to stay on the cutting edge.",
      hobbies: "In his free time, you will probably find him outside as he loves the outdoors and any activity related.",
     
    },
    { 
      first: "riley",
      last: "barret",
      school: "He graduated from Texas Tech University with a Bachelor’s in Business Administration, majoring in Management Information Systems, with his concentration being Business Analysis. ",
      about: "Riley specializes in application design and documentation. He typically meets with clients to get an understanding of what the customer’s needs are and ensures that the product is created exactly how it needs to be.",
      hobbies: "In his free time, Riley likes to work out and socialize with friends.",
      
    },
    { 
      first: "alex",
      last: "",
      school: "",
      about: " Do I like standing on litter because I sit when I have spaces, my cat buddies have no litter. I live in luxury cat life lick the plastic bag.",
      hobbies: "",
      
    },
    { 
      first: "kat",
      last: "bueno",
      school: "She is a student at Texas Tech University pursuing a Bachelor’s in Computer Science with a minor in Mathematics.",
      about: "Katrina’s interests lie in UX/UI design and front-end web development. She will finish her undergraduate degree in August 2020 and plans on moving forward with pursuing a master’s degree relating to Human-Computer Interaction.",
      hobbies: "Katrina likes to read and take photos in her free time. ",
      
    },
  ];


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
    this.abouttext = this.teamtext.find(t => t.first === name);
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
