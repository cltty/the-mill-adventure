import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Product } from '../../models/product';
import { ShopService } from '../../services/shop/shop.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit, OnDestroy {
  product: Product | undefined;
  similarProducts: Product[] | undefined;
  contentLoaded: Promise<boolean> | undefined;
  componentDestroyed$: Subject<void> = new Subject<void>();

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.shopService
      .getProductBySlug(
        this.activatedRoute.snapshot.params['productSlug'].toString()
      )
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((response: any) => {
        this.product = response.data.products[0];
        this.shopService
          .getProductsByCategorySlug(this.product?.categorySlug as string)
          .pipe(takeUntil(this.componentDestroyed$))
          .subscribe((response: any) => {
            console.log('similar products > ', response);
            this.similarProducts = response.data.products.slice(0, 3);
            console.log('similar products > ', this.similarProducts);
            this.contentLoaded = Promise.resolve(true);
          });
      });
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
