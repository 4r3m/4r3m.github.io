import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableCarousel8Component } from './reusable-carousel8.component';

describe('ReusableCarousel8Component', () => {
  let component: ReusableCarousel8Component;
  let fixture: ComponentFixture<ReusableCarousel8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReusableCarousel8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(ReusableCarousel8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
