import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Category } from '../../models/category';
import { ShopService } from '../../services/shop/shop.service';

@Component({
  selector: 'app-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.scss'],
})
export class TopCategoriesComponent implements OnInit {
  categories: Category[] | undefined;
  topCategories: Category[] | undefined ;
  showCategoryModal: boolean = false;
  contentLoaded: Promise<boolean> | undefined;
  componentDestroyed$: Subject<void> = new Subject<void>();

  constructor(private shopService: ShopService, private router: Router) {}

  ngOnInit(): void {
    this.shopService.getAllCategories().subscribe((response: any) => {
      this.categories = response.data.categories;
      this.topCategories = this.getTopCategories(response.data.categories);
      this.contentLoaded = Promise.resolve(true);
    });
  }

  private getTopCategories(categories: Category[]): Category[] {
    const arrayToBeSorted = [...categories];

    return arrayToBeSorted
      .sort((a, b) => (a.productsCount > b.productsCount ? -1 : 1))
      .slice(0, 4);
  }

  onCategoryClick(category: Category) {
    this.router.navigateByUrl(`/category/${category?.slug}`);
  }

  onTriggerCategoryModal(flag: boolean) {
    this.showCategoryModal = flag;
  }

  onSaveCategoryModal() {
    this.onTriggerCategoryModal(false);
    console.log('..redirecting');
    this.router.navigateByUrl('/categories');
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
