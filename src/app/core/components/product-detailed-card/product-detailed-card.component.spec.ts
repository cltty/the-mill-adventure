import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailedCardComponent } from './product-detailed-card.component';

describe('ProductDetailedCardComponent', () => {
  let component: ProductDetailedCardComponent;
  let fixture: ComponentFixture<ProductDetailedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailedCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
