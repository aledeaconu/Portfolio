import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  icons = [1, 2, 3, 4, 5,6];
  leftValues: string[] = [];

  ngOnInit(): void {
    this.generateLeftValues();
  }

  generateLeftValues(): void {
    const min = 10;
    const max = 70;
    this.leftValues = this.icons.map(() => {
      const randomValue = Math.random() * (max - min) + min;
      return `${randomValue}%`;
    });
  }
}
