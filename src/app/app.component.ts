import { Component, AfterViewInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
constructor(private el: ElementRef, 
  @Inject(PLATFORM_ID) private platformID: Object){}


ngAfterViewInit(): void {
  if(isPlatformBrowser(this.platformID)){
  const cursorDot = this.el.nativeElement.querySelector('[data-cursor-dot]');
  const cursorOutline = this.el.nativeElement.querySelector('[data-cursor-outline]');

  if (cursorDot && cursorOutline) {
    window.addEventListener('mousemove', (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

     cursorOutline.animate({
      top: `${posY}px`,
      left: `${posX}px`
     }, {duration: 500, fill: 'forwards'})
    });

    
    };
  }
}
}
