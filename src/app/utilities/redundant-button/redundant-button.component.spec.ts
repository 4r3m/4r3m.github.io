import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedundantButtonComponent } from './redundant-button.component';

describe('RedundantButtonComponent', () => {
  let component: RedundantButtonComponent;
  let fixture: ComponentFixture<RedundantButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedundantButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedundantButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
