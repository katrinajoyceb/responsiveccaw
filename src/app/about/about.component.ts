import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-about',
  animations: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  team: boolean;
  about: boolean;


  constructor(private aboutService: AboutService) { 
  }

  ngOnInit() {

  }

  goTeam(){
    this.aboutService.goTeam();
    this.team = this.aboutService.team;
    this.about = this.aboutService.about;
  }  
  goAbout(){
    this.aboutService.goAbout();
    this.team = this.aboutService.team;
    this.about = this.aboutService.about;
  } 
  
}
