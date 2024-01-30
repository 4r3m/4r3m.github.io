import { Component, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @ViewChild('nameInput')
  nameInput!: ElementRef;
  @ViewChild('emailInput')
  emailInput!: ElementRef;
  @ViewChild('subjectInput')
  subjectInput!: ElementRef;
  @ViewChild('messageInput')
  messageInput!: ElementRef;

  sendEmail() {
    const to = 'rgsalvador@iskolarngbayan.pup.edu.ph';
    const nameInput = this.nameInput.nativeElement.value;
    const emailInput = this.emailInput.nativeElement.value;
    const subjectInput = this.subjectInput.nativeElement.value;
    const messageInput = this.messageInput.nativeElement.value;
    const body = `Name: ${nameInput}\n\nEmail: ${emailInput}\n\nMessage: ${messageInput}`;
    const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(
      subjectInput
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  }
}
