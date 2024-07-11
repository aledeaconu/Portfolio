import { Component, ViewChildren, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import { IntersectionObserverService } from '../service/intersection-observer.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements AfterViewInit {
  icons = [1, 2, 3, 4, 5, 6, 7];

  @ViewChildren('section') sections!: QueryList<ElementRef>;

  constructor(private intersectionObs: IntersectionObserverService) {}

  ngAfterViewInit(): void {
    const sectionElements = this.sections.toArray();
    sectionElements.forEach((section) => {
      this.intersectionObs.observeSection(section.nativeElement, sectionElements);
    });
  }
}

