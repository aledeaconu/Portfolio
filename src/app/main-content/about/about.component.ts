import { AfterViewInit, Component, ElementRef, OnInit, PLATFORM_ID, ViewChild, Inject} from '@angular/core';
import { IntersectionObserverService } from '../../service/intersection-observer.service';
import AOS from 'aos'
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit, OnInit  {
  @ViewChild('textAnimation') textAnimation!: ElementRef
  cvOpened = false;
 
  constructor(private intersectionObs: IntersectionObserverService, @Inject(PLATFORM_ID) private platformId: Object){}

  ngAfterViewInit(): void {
    this.intersectionObs.observeAnimatedText(this.textAnimation.nativeElement)
  }
  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      AOS.init()
    }

  }
  /**
   * toggle the CV's visibility
   */
  toggleCV() {
    this.cvOpened = true;
  }
}
