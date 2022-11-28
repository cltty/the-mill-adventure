import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input()
  product: Product | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onProductClick() {
    this.router.navigateByUrl(`/product/${this.product?.slug}`);
  }
}
