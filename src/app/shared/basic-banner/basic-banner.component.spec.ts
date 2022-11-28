import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBannerComponent } from './basic-banner.component';

describe('BasicBannerComponent', () => {
  let component: BasicBannerComponent;
  let fixture: ComponentFixture<BasicBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
