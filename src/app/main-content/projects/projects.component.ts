import {
  Component,
  QueryList,
  ViewChildren,
  ElementRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChildren('video') videos!: QueryList<ElementRef<HTMLVideoElement>>;

  projects = [
    {
      title: 'Pollo Loco',
      tech: 'JavaScript | HTML | CSS',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      src: './../../../assets/video/pollo_loco.mp4',
      isDragged: false,
      url:"http://alexandra-deaconu.com/Pollo_Locco/index.html"
    },
    {
      title: 'Ring Of Fire',
      tech: 'Angular | Typescript | Firebase',
      description:
        'Dive into this exciting multiplayer drinking game. Draw a card and follow the fun instructions to keep the party going.',
      shortDescription: 'Dive into this exciting multiplayer drinking game.',
        src: '../../../assets/video/ring-of-fire.mp4',
      isDragged: false,
      url: "https://ring-of-fire-22138.web.app/"
    },
    {
      title: 'Join',
      tech: 'JavaScript | HTML | CSS',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      src: '../../../assets/video/join.mp4',
      isDragged: false,
      url: "http://alexandra-deaconu.com/Join-main/index.html"
    },
  ];

  isSmallScreen:boolean = false

  ngAfterViewInit() {
    this.videos.forEach((videoElementRef) => {
      const video = videoElementRef.nativeElement;
      video.addEventListener('mouseenter', () => this.playVideo(video));
      video.addEventListener('mouseleave', () => this.pauseVideo(video));
      video.volume = 0;
    });
  }

  playVideo(video: HTMLVideoElement) {
    video.play();
  }

  pauseVideo(video: HTMLVideoElement) {
    video.pause();
  }

  dragDescription(index: number) {
    this.projects.forEach((project, i) => {
      if (i === index) {
        project.isDragged = !project.isDragged;
      } else {
        project.isDragged = false;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(){
    this.checkScreenSize()
  }

  checkScreenSize(){
    this.isSmallScreen = window.innerWidth <= 650
  }

  navigateToLink(event: MouseEvent, url: any){
    event.stopPropagation();
    window.open(url, '_blank')
  }
}
