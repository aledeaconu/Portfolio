// header.component.ts
import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private commonService: CommonService) {}

  scrollToAnchor(anchor: string) {
    this.commonService.scrollToAnchor(anchor);
  }

  get selectedAnchor(): string {
    return this.commonService.selectedAnchor;
  }
}
