import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
// import { HttpService } from '../services/http.service';


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
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        width: '500px',
        opacity: 1,    
        transform: 'translateX(-280px)',  
      })),
      state('close', style({
        width: '250px',
        opacity: 1,
      })),
      transition('open => close', [
       
        animate('1s')
      ]),
      transition('close => open', [
        animate('1s')
      ]),
    ]),
    trigger('smallLarge', [
      // ...
      state('small', style({
        width: '860px',
        opacity: 1,   
      })),
      state('large', style({
        width: '1150px',
        opacity: 1,
      })),
      transition('large => small', [
        animate('1s')
      ]),
      transition('small => large', [
        animate('1s')
      ]),
    ]),
    trigger('contactForm', [
      // ...
      state('small', style({
        width: '500px',
        opacity: 1,   
      })),
      state('large', style({
        width: '813px',
        opacity: 1,
      })),
      transition('large => small', [
        animate('1s')
      ]),
      transition('small => large', [
        animate('1s')
      ]),
    ]),
    trigger('translateForm', [
      // ...
      
      state('small', style({
        transform: 'translateX(-280px)',
       
      })),
      state('large', style({
        transform: 'translateX(0)',
      })),
      transition('large => small', [
        animate('1s')
      ]),
      transition('small => large', [
        animate('1s')
      ]),
    ])
  ]
})
export class ContactComponent implements OnInit {

  isMapOpen: boolean = false;
  isSent: boolean = false;
  resultMessage: String;
  contactForm = new FormGroup ({
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    name: new FormControl(''),
    message: new FormControl(''),
  });



  constructor() {}

  ngOnInit() {
  }


  openMap(){
    this.isMapOpen = true;
  }

  closeMap(){
    this.isMapOpen = false;
  }


  messageUs(){
    let user = {
      name: this.contactForm.get('name').value,
      email: this.contactForm.get('email').value,
      message: this.contactForm.get('message').value,
    }

    console.log(user);
   
    // this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
    //   data => {
    //     let res:any = data;
    //     console.log("Email Sent");
    //     this.resultMessage = "Your Message Has Been Sent!"
    //     this.isSent = true;
        
        
    //   },
    //   err => {
    //     console.log(err);
    //     this.contactForm.reset();
    //     this.isSent = true;
    //     this.resultMessage = 'Unknown Error Occured';
    //   },() => {
    //     console.log("");
    //   }
    // );


    
   
  
  }
}
