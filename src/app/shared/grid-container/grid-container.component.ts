import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.scss'],
})
export class GridContainerComponent implements OnInit {
  @Input()
  gridElements: Product[] | undefined;

  constructor() {}

  ngOnInit(): void {}

  debug() {
    console.log('GridContainerComponent..');
    console.log('gridElements > ', this.gridElements);
  }
}
