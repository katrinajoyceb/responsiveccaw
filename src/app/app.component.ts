import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'responsiveccaw';

  condition: boolean = true;
  public scrolling = false;
  private timeout: number;

  
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.scrolling = true;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.scrolling = false;
    }, 200);
  }
}
