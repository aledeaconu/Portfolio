import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { defineConfig } from 'vite';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  const cursorDot = document.querySelector('[data-cursor-dot]')
  const cursorOutline = document.querySelector('[data-cursor-outline]')

  