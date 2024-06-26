import {
  Component,
  QueryList,
  ViewChildren,
  ElementRef,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  @ViewChildren('video') videos!: QueryList<ElementRef<HTMLVideoElement>>;

  projects = [
    {
      title: 'Pollo Loco',
      tech: 'JavaScript | HTML | CSS',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      src: 'assets/video/pollo_loco.mp4',
      isDragged: false,
      url: 'http://alexandra-deaconu.com/Pollo_Locco/index.html',
      gitHubShow: false
    },
    {
      title: 'Ring Of Fire',
      tech: 'Angular | Typescript | Firebase',
      description:
        'Dive into this exciting multiplayer drinking game. Draw a card and follow the fun instructions to keep the party going.',
      shortDescription: 'Dive into this exciting multiplayer drinking game.',
      src: 'assets/video/ring-of-fire.mp4',
      isDragged: false,
      url: 'https://ring-of-fire-22138.web.app/',
      gitHubShow: false
    },
    {
      title: 'Join',
      tech: 'JavaScript | HTML | CSS',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      src: 'assets/video/join.mp4',
      isDragged: false,
      url: 'http://alexandra-deaconu.com/Join-main/index.html',
      gitHubShow: false
    },
  ];

  isSmallScreen: boolean = false;
 
  




  /**
   * Toggle the "isDragged" property for a project description
   * @param index - the index of the project in the projects array
   */
  dragDescription(index: number) {
    this.projects.forEach((project, i) => {
      project.isDragged = i === index && !project.isDragged;
      project.gitHubShow = i === index && !project.gitHubShow
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
    this.isSmallScreen = window.innerWidth <= 650;
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
