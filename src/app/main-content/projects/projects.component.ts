import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Pollo Loco',
      tech: 'JavaScript | HTML | CSS',
      description: 'projects.project_1',
      src: 'assets/video/pollo_loco.mp4',
      isDragged: false,
      url: 'https://alexandra-deaconu.com/Pollo-Locco/index.html',
      gitHubShow: false,
      gitLink: 'https://github.com/aledeaconu/Pollo-Loco',
    },
    {
      title: 'Ring Of Fire',
      tech: 'Angular | Typescript | Firebase',
      description: 'projects.project_2',
      shortDescription: 'Dive into this exciting multiplayer drinking game.',
      src: 'assets/video/ring-of-fire.mp4',
      isDragged: false,
      url: 'https://ring-of-fire-22138.web.app/',
      gitHubShow: false,
      gitLink: 'https://github.com/aledeaconu/Ring-Of-Fire',
    },
    {
      title: 'Join',
      tech: 'JavaScript | HTML | CSS',
      description: 'projects.project_3',
      src: 'assets/video/join.mp4',
      isDragged: false,
      url: 'http://alexandra-deaconu.com/Join-main/index.html',
      gitHubShow: false,
      gitLink: 'https://github.com/bwfront/Join',
    },
  ];

  isSmallScreen: boolean = false;
isGerm: boolean = false
  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformID: Object
  ) {
   
   
  }

  translateProject() {
    this.projects.forEach((project, index) => {
      this.translate
        .get(`projects.project_${index + 1}`)
        .subscribe((translation: string) => {
          project.description = translation;
         project.shortDescription = translation;
        });
    });
  }

  /**
   * Toggle the "isDragged" property for a project description
   * @param index - the index of the project in the projects array
   */
  dragDescription(index: number) {
    this.projects.forEach((project, i) => {
      project.isDragged = i === index && !project.isDragged;
      project.gitHubShow = i === index && !project.gitHubShow;
    });
  }

  /**
   * HostListener to detect window resize events
   * @param event - the resize event object
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  /**
   * Check if the screen size is small
   */
  checkScreenSize() {
    if (isPlatformBrowser(this.platformID)) {
      this.isSmallScreen = window.innerWidth <= 650;
    }
  }

  /**
   * Navigate to a project URL in a new tab
   * @param event - the mouse click event
   * @param url - the URL to navigate to
   */
  navigateToLink(event: MouseEvent, url: any) {
    event.stopPropagation();
    window.open(url, '_blank');
  }
}
