import { Component, AfterViewInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(
    private el: ElementRef, 
    @Inject(PLATFORM_ID) private platformID: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformID)) {
      // Logic for the cursor
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
          }, { duration: 500, fill: 'forwards' });
        });
      }

      // Load chatbot
      this.loadChatbotScript();
    }
  }

  private loadChatbotScript(): void {
    if (isPlatformBrowser(this.platformID)) {
      (window as any).embeddedChatbotConfig = {
        chatbotId: 'qJaLxkjW-3fi4q1hSxR6z',
        domain: 'www.chatbase.co'
      };

      const script = document.createElement('script');
      script.src = 'https://www.chatbase.co/embed.min.js';
      script.defer = true;
      script.setAttribute('chatbotId', 'qJaLxkjW-3fi4q1hSxR6z');
      script.setAttribute('domain', 'www.chatbase.co');
      document.body.appendChild(script);
    }
  }
}
