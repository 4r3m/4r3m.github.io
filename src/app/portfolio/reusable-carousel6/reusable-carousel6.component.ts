import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-carousel6',
  templateUrl: './reusable-carousel6.component.html',
  styleUrls: ['./reusable-carousel6.component.scss']
})
export class ReusableCarousel6Component {
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
