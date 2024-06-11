import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private scroller: ViewportScroller) {}

  scrollToAnchor(anchor: string) {
    
    const element = document.getElementById(anchor);
  
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      this.selectedAnchor = anchor;
    }
  }
  selectedAnchor: string = 'home'
}
