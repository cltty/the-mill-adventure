import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detailed-card',
  templateUrl: './product-detailed-card.component.html',
  styleUrls: ['./product-detailed-card.component.scss'],
})
export class ProductDetailedCardComponent implements OnInit {
  @Input()
  product: Product | undefined;

  constructor() {}

  ngOnInit(): void {}
}
