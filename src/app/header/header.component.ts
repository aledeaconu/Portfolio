import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  /**
   * inject the CommonService into the component
   * @param commonService - the common service
   */
  constructor(private commonService: CommonService) {}

  /**
   * scroll to a specific anchor within the page
   * @param anchor - the ID of the anchor to scroll to
   */
  scrollToAnchor(anchor: string) {
    this.commonService.scrollToAnchor(anchor);
  }

  /**
   * get the currently selected anchor
   * @returns - the ID of the currently selected anchor
   */
  get selectedAnchor(): string {
    return this.commonService.selectedAnchor;
  }
}
