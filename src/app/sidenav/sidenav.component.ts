import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
isMenuOpen = false;

  constructor(private commonService: CommonService) {}

  scrollToAnchor(anchor: string) {
    this.commonService.scrollToAnchor(anchor);
  }

  get selectedAnchor(): string {
    return this.commonService.selectedAnchor;
  }

  toggleMenu(event: Event){
    event.preventDefault()
    this.isMenuOpen = !this.isMenuOpen
    console.log(this.isMenuOpen)
  }
}
