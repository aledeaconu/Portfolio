import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  /**
   * inject the CommonService into the component
   * @param commonService - the common service
   */
  constructor(private commonScroller: CommonService, private router: Router) {}

  /**
   * scroll to a specific anchor within the page
   * @param anchor - the ID of the anchor to scroll to
   */
  scrollToAnchor(anchor: string) {
    this.router.navigate(['/'], {fragment: anchor}).then(() => {
      this.commonScroller.scrollToAnchor(anchor);
    })
    
  }
}
