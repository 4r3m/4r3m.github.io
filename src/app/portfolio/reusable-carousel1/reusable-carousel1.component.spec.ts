import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableCarousel1Component } from './reusable-carousel1.component';

describe('ReusableCarousel1Component', () => {
  let component: ReusableCarousel1Component;
  let fixture: ComponentFixture<ReusableCarousel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableCarousel1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableCarousel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
