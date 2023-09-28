import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-reusable-carousel1',
  templateUrl: './reusable-carousel1.component.html',
  styleUrls: ['./reusable-carousel1.component.scss'],
})
export class ReusableCarousel1Component {
  @Input() slides: any[] = [];
  slideIndex = 1;

  plusSlides(n: number) {
    this.slideIndex += n;
    if (this.slideIndex > this.slides.length) {
      this.slideIndex = 1;
    }
    if (this.slideIndex < 1) {
      this.slideIndex = this.slides.length;
    }
  }

  currentSlide(n: number) {
    this.slideIndex = n;
  }
}
