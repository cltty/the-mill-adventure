import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Category } from '../../models/category';
import { Product } from '../../models/product';
import { ShopService } from '../../services/shop/shop.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
})
export class CategoryPageComponent implements OnInit {
  products: Product[] | undefined;
  category: Category | undefined;
  contentLoaded: Promise<boolean> | undefined;
  componentDestroyed$: Subject<void> = new Subject<void>();

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.shopService
      .getCategoryBySlug(
        this.activatedRoute.snapshot.params['categorySlug'].toString()
      )
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((response: any) => {
        this.category = response.data.categories[0];

        this.shopService
          .getProductsByCategorySlug(this.category?.slug as string)
          .pipe(takeUntil(this.componentDestroyed$))
          .subscribe((response: any) => {
            this.products = response.data.products;
            this.contentLoaded = Promise.resolve(true);
          });
      });
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
