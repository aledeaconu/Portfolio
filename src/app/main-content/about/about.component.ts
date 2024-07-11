import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { IntersectionObserverService } from '../../service/intersection-observer.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit  {
  @ViewChild('textAnimation') textAnimation!: ElementRef
  cvOpened = false;
 
  constructor(private intersectionObs: IntersectionObserverService){}

  ngAfterViewInit(): void {
    this.intersectionObs.observeAnimatedText(this.textAnimation.nativeElement)
  }
  /**
   * toggle the CV's visibility
   */
  toggleCV() {
    this.cvOpened = true;
  }
}
