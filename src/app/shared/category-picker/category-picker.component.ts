import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/core/models/category';

@Component({
  selector: 'app-category-picker',
  templateUrl: './category-picker.component.html',
  styleUrls: ['./category-picker.component.scss'],
})
export class CategoryPickerComponent implements OnInit {
  @Input()
  categories: Category[] | undefined;

  @Output()
  closeEventEmitter = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onCategoryClick(category: Category) {
    this.router.navigateByUrl(`/category/${category?.slug}`);
  }

  onClose() {
    console.log('onClose');
    this.closeEventEmitter.emit();
  }
}
