import { Component, OnInit } from '@angular/core';

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
