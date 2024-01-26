import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableCarousel6Component } from './reusable-carousel6.component';

describe('ReusableCarousel6Component', () => {
  let component: ReusableCarousel6Component;
  let fixture: ComponentFixture<ReusableCarousel6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableCarousel6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableCarousel6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
