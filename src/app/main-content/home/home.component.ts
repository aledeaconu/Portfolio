import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../service/common.service';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  cyclingLetters: string[] = ['CREATIVE', 'INNOVATIVE', 'EXPERIMENTAL', 'HUMBLE'];
  currentLetterNumber: number = 0;
  private intervalId: any;

  /**
   * inject the CommonService into the component
   * @param commonService - the common service
   */
  constructor(private commonService: CommonService, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.startCycleTexts();
  }

  startCycleTexts() {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.currentLetterNumber = (this.currentLetterNumber + 1) % this.cyclingLetters.length;
        });
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  /**
   * scroll to a specific anchor within the page
   * @param anchor - the ID of the anchor to scroll to
   */
  scrollToAnchor(anchor: string) {
    this.commonService.scrollToAnchor(anchor);
  }
}
