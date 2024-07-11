import { Injectable, OnDestroy, ElementRef } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { throttle } from 'lodash'; 

@Injectable({
  providedIn: 'root',
})
export class IntersectionObserverService implements OnDestroy {
  private observers: IntersectionObserver[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  public observeSection(section: HTMLElement, sectionElements: ElementRef[]): void {
    if (isPlatformBrowser(this.platformId)) {
      const throttledCallback = throttle((entries) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting ) {
            section.classList.add('fade-in');
            section.classList.remove('fade-out');

            sectionElements.forEach(otherSection => {
              if (otherSection.nativeElement !== section) {
                otherSection.nativeElement.classList.add('fade-out');
                otherSection.nativeElement.classList.remove('fade-in');
              }
            })
          } else {
            section.classList.add('fade-out');
            section.classList.remove('fade-in');
          }
        });
      }, 16); 

      const observer = new IntersectionObserver(throttledCallback, {
        threshold: 0.2,  
        rootMargin: '0px 0px -50px 0px', 
      });

      observer.observe(section);
      this.observers.push(observer);
    }
  }

  public observeAnimatedText(textAnimation: HTMLElement): void {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              textAnimation.classList.add('text-animation');
              observer.unobserve(textAnimation);
            } else {
              textAnimation.classList.remove('text-animation');
            }
          });
        },
        {
          threshold: 0.25,

        }
      );

      observer.observe(textAnimation);
      this.observers.push(observer); 
    }
  }

  ngOnDestroy(): void {
    this.observers.forEach(observer => observer.disconnect()); 
  }
}