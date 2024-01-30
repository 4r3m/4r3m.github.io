import { environment } from '../environments/environment';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import {
  FULL_NAME,
  SELF_DESCRIPTION,
  SPECIALIZATION,
} from './utilities/const/main';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private title: Title) {
    title.setTitle('Raymart Salvador');
  }
  specialization = SPECIALIZATION;
  fullName = FULL_NAME;
  selfDescription = SELF_DESCRIPTION;

  function: Function = this.downloadMyFile;
  buttonText = 'Download CV';
  fontAwesome = 'fas fa-download';

  _ASSETS = environment._ASSETS;

  ngOnInit(): void {
    this.setButtonListeners();
    AOS.init(); //AOS - 2
    AOS.refresh(); //refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }

  downloadMyFile() {
    // Create a link element
    const link = document.createElement('a');
    // Set the target attribute to '_blank' to open the file in a new tab
    link.setAttribute('target', '_blank');
    // Set the href attribute to the URL of the file you want to download
    link.setAttribute('href', '/assets/files/RaymartSalvador.pdf');
    // Set the download attribute to the desired filename for the downloaded file
    link.setAttribute('download', 'RaymartSalvador.pdf');
    // Append the link element to the body of the page
    document.body.appendChild(link);
    // Simulate a click on the link to initiate the download
    link.click();
    // Remove the link element from the page once the download has started
    link.remove();
    // Log a message to the console to indicate that the download has started
    console.log('Download started');
  }
  private setButtonListeners() {
    document.querySelectorAll('.control').forEach((button: Element) => {
      button.addEventListener('click', function (this: HTMLElement) {
        const id = this.getAttribute('data-id');
        if (id) {
          document.querySelector('.active-btn')!.classList.remove('active-btn');
          this.classList.add('active-btn');
          document.querySelector('.active')!.classList.remove('active');
          document.getElementById(id)!.classList.add('active');
        }
      });
    });

    document.querySelector('.theme-btn')!.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
    });
  }
}
