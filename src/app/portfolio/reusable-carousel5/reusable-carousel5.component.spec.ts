import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableCarousel5Component } from './reusable-carousel5.component';

describe('ReusableCarousel5Component', () => {
  let component: ReusableCarousel5Component;
  let fixture: ComponentFixture<ReusableCarousel5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableCarousel5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableCarousel5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
