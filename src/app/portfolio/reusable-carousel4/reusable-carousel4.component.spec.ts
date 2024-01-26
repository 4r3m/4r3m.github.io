import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableCarousel4Component } from './reusable-carousel4.component';

describe('ReusableCarousel4Component', () => {
  let component: ReusableCarousel4Component;
  let fixture: ComponentFixture<ReusableCarousel4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableCarousel4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableCarousel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
