import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableCarousel7Component } from './reusable-carousel7.component';

describe('ReusableCarousel7Component', () => {
  let component: ReusableCarousel7Component;
  let fixture: ComponentFixture<ReusableCarousel7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableCarousel7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableCarousel7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
