import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-carousel',
  templateUrl: './homepage-carousel.component.html',
  styleUrls: ['./homepage-carousel.component.scss'],
})
export class HomepageCarouselComponent implements OnInit {
  slides: any[] = new Array(3);
  constructor() {}

  ngOnInit(): void {
    this.slides = [
      {
        id: 0,
        src: './assets/chair-1.jpg',
        title: 'First slide',
        subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      },
      {
        id: 1,
        src: './assets/chair-2.jpg',
        title: 'Second slide',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: 2,
        src: './assets/chair-3.jpg',
        title: 'Third slide',
        subtitle:
          'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      },
    ];
  }
}
