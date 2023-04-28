import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.setButtonListeners();
  }

  private setButtonListeners() {
    document.querySelectorAll(".control").forEach((button: Element) => {
      button.addEventListener("click", function(this: HTMLElement) {
        const id = this.getAttribute("data-id");
        if (id) {
          document.querySelector(".active-btn")!.classList.remove("active-btn");
          this.classList.add("active-btn");
          document.querySelector(".active")!.classList.remove("active");
          document.getElementById(id)!.classList.add("active");
        }
      });
    });

    document.querySelector(".theme-btn")!.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  }
}
