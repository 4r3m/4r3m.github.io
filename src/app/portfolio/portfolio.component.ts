import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  _ASSETS = environment._ASSETS;

  slides = [
    {
      url: this._ASSETS + '/assets/images/cashless-system/1.jpg',
    },
    {
      url: this._ASSETS + '/assets/images/cashless-system/2.jpg',
    },
    {
      url: this._ASSETS + '/assets/images/cashless-system/3.jpg',
    },
    {
      url: this._ASSETS + '/assets/images/cashless-system/4.jpg',
    },
    {
      url: this._ASSETS + '/assets/images/cashless-system/5.jpg',
    },
  ];

  slides1 = [
    {
      url: this._ASSETS + '/assets/images/kalisto/1.jpg',
    },
    {
      url: this._ASSETS + '/assets/images/kalisto/2.jpg',
    },
    {
      url: this._ASSETS + '/assets/images/kalisto/3.jpg',
    },
    {
      url: this._ASSETS + '/assets/images/kalisto/4.jpg',
    },
    {
      url: this._ASSETS + '/assets/images/kalisto/5.jpg',
    },
    {
      url: this._ASSETS + '/assets/images/kalisto/6.jpg',
    },
    {
      url: this._ASSETS + '/assets/images/kalisto/7.jpg',
    },
  ];

  slides2 = [
    {
      url: this._ASSETS + '/assets/images/dental-clinic/1.png',
    },
    {
      url: this._ASSETS + '/assets/images/dental-clinic/2.png',
    },
    {
      url: this._ASSETS + '/assets/images/dental-clinic/3.png',
    },
    {
      url: this._ASSETS + '/assets/images/dental-clinic/4.png',
    },
    {
      url: this._ASSETS + '/assets/images/dental-clinic/5.png',
    },
    {
      url: this._ASSETS + '/assets/images/dental-clinic/6.png',
    },
    {
      url: this._ASSETS + '/assets/images/dental-clinic/7.png',
    },
  ];
}
