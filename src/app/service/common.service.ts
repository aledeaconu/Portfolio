import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private scroller: ViewportScroller) {}

  private anchorOffsets: {
    [key: string]: { desktop: number; tablet: number; mobile: number; };
  } = {
    home: { desktop: 0, tablet: 0, mobile: 0 },
    about: { desktop: -100, tablet: -120, mobile: -10 },
    projects: { desktop: -70, tablet: -60, mobile: -10 },
    contact: { desktop: -100, tablet: -70, mobile: -10 },
  };

  selectedAnchor: string = 'home';

  /**
   * Scroll to a specific anchor within the page
   * @param anchor - the ID of the anchor to scroll to
   */
  scrollToAnchor(anchor: string) {
    const element = document.getElementById(anchor);

    if (element) {
      let width = window.innerWidth;
      let offset: number;

      if (width <= 600) {
        offset = this.anchorOffsets[anchor].mobile;
      } else if (width <= 1024) {
        offset = this.anchorOffsets[anchor].tablet;
      } else {
        offset = this.anchorOffsets[anchor].desktop;
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

  /**
   * Detect the currently visible section and update selectedAnchor
   */
  updateAnchorOnScroll() {
    const anchors = Object.keys(this.anchorOffsets);
    let currentAnchor = this.selectedAnchor;

    for (let anchor of anchors) {
      const element = document.getElementById(anchor);

      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentAnchor = anchor;
          break;
        }
      }
    }

    if (currentAnchor !== this.selectedAnchor) {
      this.selectedAnchor = currentAnchor;
    }
  }
}
