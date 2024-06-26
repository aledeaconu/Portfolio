import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private scroller: ViewportScroller) {}

  private anchorOffsets: {
    [key: string]: { desktop: number; tablet: number; mobile: number };
  } = {
    home: { desktop: 0, tablet: 0, mobile: 0 },
    about: { desktop: -50, tablet: -20, mobile: 0 },
    projects: { desktop: -50, tablet: -80, mobile: 30 },
    contact: { desktop: 22, tablet: -30, mobile: 0 },
  };

  /**
   * Scroll to a specific anchor within the page
   * @param anchor - the ID of the anchor to scroll to
   */
  scrollToAnchor(anchor: string) {
    const element = document.getElementById(anchor);

    if (element) {
      let width = window.innerWidth;
      let offset: number;

      if (width <= 400) {
        offset = this.anchorOffsets[anchor].mobile;
      } else if (width <= 1300){
        offset = this.anchorOffsets[anchor].tablet;
      } else {
        offset = this.anchorOffsets[anchor].desktop
      }

    
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition + offset,
        behavior: 'smooth',
      });

      this.selectedAnchor = anchor;
    }
  }

  selectedAnchor: string = 'home';
}
