import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(private title: Title) {
    title.setTitle('Raymart Salvador');
  }

  fontAwesome = 'fas fa-download';
  buttonText = 'Download CV';
  _ASSETS = environment._ASSETS;
  showModal = false;
  modalAsset = '';
  certificates = [
    {
      url: this._ASSETS + '/assets/images/my-certificates/1.png',
      title: 'Cyber Security: Guide and Awareness',
      description:
        'A seminar about how vulnerable we are in the world of internet. ',
    },
    {
      url: this._ASSETS + '/assets/images/my-certificates/2.png',
      title: 'Business Analysis: Planning in Creating a Requirements Document',
      description: 'A discussion that involves the process before development',
    },
    {
      url: this._ASSETS + '/assets/images/my-certificates/3.png',
      title: 'UI/UX Design: Design Fundamentals for Beginners',
      description:
        'It gave a glimpse of the trending tools used in UI/UX design.',
    },
    {
      url: this._ASSETS + '/assets/images/my-certificates/4.png',
      title:
        'Project Management Fundamentals and Customer Support as the Frontline of an Organization',
      description: 'A talk of a perspective of a project manager',
    },
    {
      url: this._ASSETS + '/assets/images/my-certificates/5.png',
      title: 'Database and Systems Administration for Beginners',
      description:
        'A live demonstration of SQL database things and how to manage it.',
    },
    {
      url: this._ASSETS + '/assets/images/my-certificates/6.png',
      title: 'Introduction to Data Analysis with Excel and Power BI tools',
      description:
        'A live demonstration of how to actually use the data from filtering to displaying the output.',
    },
  ];

  enlargeImage(asset: string) {
    this.modalAsset = asset;
    this.showModal = true;
  }

  closeImageModal() {
    this.showModal = false;
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
}
