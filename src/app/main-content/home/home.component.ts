import { Component } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private commonService: CommonService) {}

  scrollToAnchor(anchor: string) {
    this.commonService.scrollToAnchor(anchor);
  }

}
