import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  cvOpened = false;

  /**
   * toggle the CV's visibility
   */
  toggleCV() {
    this.cvOpened = true;
  }
}
