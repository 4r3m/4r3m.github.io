import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableCarousel9Component } from './reusable-carousel9.component';

describe('ReusableCarousel9Component', () => {
  let component: ReusableCarousel9Component;
  let fixture: ComponentFixture<ReusableCarousel9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableCarousel9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableCarousel9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
