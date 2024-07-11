import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../service/common.service';
import { NgZone } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  cyclingWords: string[] = [];
  currentWordIndex: number = 0;
  private intervalId: any;

  /**
   * inject the CommonService into the component
   * @param commonService - the common service
   */
  constructor(
    private commonService: CommonService,
    private ngZone: NgZone,
    private translate: TranslateService
  ) {}

 ngOnInit(): void {
    const keys = ['cyclingWords_1', 'cyclingWords_2', 'cyclingWords_3'];
    keys.forEach((key) => {
      this.translate.get('home.' + key).subscribe((translation: string) => {
        this.cyclingWords.push(translation);
        
      });
    });

    this.startCycleTexts();
  }
  
  startCycleTexts() {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.currentWordIndex =
            (this.currentWordIndex + 1) % this.cyclingWords.length;
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
