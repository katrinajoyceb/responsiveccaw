declare var google: any;

import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     this.initMap();
  }


    initMap() {
      
      var caprock = {lat: 33.563898, lng: -101.926382};
   
      var map = new google.maps.Map(
          document.getElementById('map'), {zoom: 16, center: caprock});
   
      var marker = new google.maps.Marker({position: caprock, map: map});
    }



}
