import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-carousel8',
  templateUrl: './reusable-carousel8.component.html',
  styleUrls: ['./reusable-carousel8.component.scss'],
})
export class ReusableCarousel8Component {
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
