import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  about: boolean = true;
  team: boolean = false;
  details: boolean = false;


  constructor() { }


  goAbout(){
    this.about = true;
    this.team = false;
    this.details = false;
    console.log("GO ABOUT!");
  }

  goTeam(){
    this.about = false;
    this.team = true;
    this.details = false;
    console.log("GO TEAM!");
  }

  goDetails(){
    this.about = false;
    this.team = false;
    this.details = true;
    console.log("GO DETAILS!");
  }

}
