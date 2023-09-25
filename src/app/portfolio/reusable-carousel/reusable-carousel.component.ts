import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reusable-carousel',
  templateUrl: './reusable-carousel.component.html',
  styleUrls: ['./reusable-carousel.component.scss']
})
export class ReusableCarouselComponent {

  _ASSETS = environment._ASSETS;

  images = [
    this._ASSETS + '/assets/images/portfolio/1.jpg',
    this._ASSETS + '/assets/images/portfolio/2.png',
    this._ASSETS + '/assets/images/portfolio/3.png',
    this._ASSETS + '/assets/images/portfolio/4.png',
  ];

  slides = [
    { url: this._ASSETS + '/assets/images/portfolio/1.jpg', caption: 'Caption Text' },
    { url: this._ASSETS + '/assets/images/portfolio/2.png', caption: 'Caption Two' },
    { url:  this._ASSETS + '/assets/images/portfolio/3.png', caption: 'Caption Three' }
  ];

  slideIndex = 1;

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n: number) {
    this.slideIndex += n;
    this.showSlides(this.slideIndex);
  }

  currentSlide(n: number) {
    this.slideIndex = n;
    this.showSlides(this.slideIndex);
  }

  showSlides(n: number) {
    let i;
    let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;

    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }
}
