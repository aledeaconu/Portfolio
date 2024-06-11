import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
constructor(private commonScroller: CommonService){}

scrollToAnchor(anchor: string){
  this.commonScroller.scrollToAnchor(anchor)
}
}
