import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  isMenuOpen = false;
  /**
   * inject the CommonService into the component
   * @param commonService - the common service
   */
  constructor(private commonService: CommonService, private router: Router) {}

  /**
   * scroll to a specific anchor within the page using CommonService
   * @param anchor - the ID of the anchor element to scroll to
   */
  scrollToAnchor(anchor: string) {
    this.router.navigate(['/'], {fragment: anchor}).then(() => {
      this.commonService.scrollToAnchor(anchor);
      this.isMenuOpen = false
    })
   
  }

  /**
   * get the currently selected anchor from CommonService
   */
  get selectedAnchor(): string {
    return this.commonService.selectedAnchor;
  }

  /**
   * toggle the menu open/close state
   * @param event - the click event
   */
  toggleMenu(event: Event) {
    event.preventDefault();
    this.isMenuOpen = !this.isMenuOpen;
  }
}
