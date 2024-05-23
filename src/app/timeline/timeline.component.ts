import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  IMAGES_TODDLER = [
    '../assets/img/1_toddler/toddler_1.png',
    '../assets/img/1_toddler/toddler_2.png',
    
  ];

  IMAGES_GYMNAST = [
    '../assets/img/2_gymnast/gymnast_1.jpeg',
    '../assets/img/2_gymnast/gymnast_2.jpeg',
    '../assets/img/2_gymnast/gymnast_3.jpeg',
  ]

  
  currentImageIndex = 0;
  currentImage: any

  constructor(){
    this.currentImage = this.IMAGES_TODDLER
  }

  changeImage(): void {
    this.currentImageIndex++;
    if(this.currentImageIndex >= this.currentImage.length){
      this.currentImageIndex = 0
    }
  }

  

}


