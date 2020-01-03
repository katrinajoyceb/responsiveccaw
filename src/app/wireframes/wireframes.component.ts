import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wireframes',
  templateUrl: './wireframes.component.html',
  styleUrls: ['./wireframes.component.scss']
})
export class WireframesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.onLoad();
  }



  onLoad(){
    var isResizing = false,
    lastDownX = 0;
    
    (function() {
    var container = document.getElementById("slider"),
        left = document.getElementById("left_panel"),
        right = document.getElementById("right_panel"),
        handle = document.getElementById("drag");
    
    handle.onmousedown = function(e) {
        isResizing = true;
        lastDownX = e.clientX;
    };
    
    document.onmousemove = function(e) {
        // we don't want to do anything if we aren't resizing.
        if (!isResizing) {
            return;
        }
    
        var offsetRight = container.clientWidth - (e.clientX - container.offsetLeft);
    
        left.style.right = offsetRight + "px"; 
        right.style.width = offsetRight + "px"; 
    }
    
    document.onmouseup = function(e) {
        // stop resizing
        isResizing = false;
    }
    })();
  }

}
