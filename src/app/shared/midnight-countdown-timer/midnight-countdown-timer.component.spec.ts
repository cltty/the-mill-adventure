import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidnightCountdownTimerComponent } from './midnight-countdown-timer.component';

describe('MidnightCountdownTimerComponent', () => {
  let component: MidnightCountdownTimerComponent;
  let fixture: ComponentFixture<MidnightCountdownTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidnightCountdownTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidnightCountdownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
