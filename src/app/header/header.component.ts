import { Component, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  /**
   * inject the CommonService into the component
   * @param commonService - the common service
   */
  constructor(
    private commonService: CommonService, 
    private router: Router,
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformID: Object) {
      if(isPlatformBrowser(this.platformID)){
        window.addEventListener('scroll', this.onWindowScroll.bind(this))

      }
    }

    ngOnDestroy(): void {
      if(isPlatformBrowser(this.platformID)){
        window.removeEventListener('scroll', this.onWindowScroll.bind(this))

      }
    }

  switchLanguage(lang: 'en' | 'de' | 'ro'){
    this.translate.use(lang)
}
  /**
   * scroll to a specific anchor within the page
   * @param anchor - the ID of the anchor to scroll to
   */
  scrollToAnchor(anchor: string) {
    this.router.navigate(['/'], {fragment: anchor}).then(() =>
      this.commonService.scrollToAnchor(anchor)
    )
    
  }

  /**
   * get the currently selected anchor
   * @returns - the ID of the currently selected anchor
   */
  get selectedAnchor(): string {
    return this.commonService.selectedAnchor;
  }

  onWindowScroll(){
    this.commonService.updateAnchorOnScroll()
  }
}
