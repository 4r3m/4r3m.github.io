import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  fontAwesome = 'fas fa-download'
  buttonText = 'Download CV'
  _ASSETS = environment._ASSETS

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
