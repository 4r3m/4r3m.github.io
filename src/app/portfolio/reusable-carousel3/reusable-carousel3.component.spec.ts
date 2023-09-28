import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableCarousel3Component } from './reusable-carousel3.component';

describe('ReusableCarousel3Component', () => {
  let component: ReusableCarousel3Component;
  let fixture: ComponentFixture<ReusableCarousel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableCarousel3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableCarousel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
