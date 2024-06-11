// app.component.ts
import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedAnchor: string = 'home'; 

  constructor(private scroller: ViewportScroller) {}

  scrollToAnchor(anchor: string) {
    this.selectedAnchor = anchor;
    const element = document.getElementById(anchor);
  
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
    }
  }
}
