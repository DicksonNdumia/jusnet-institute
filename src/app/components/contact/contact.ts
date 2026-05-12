import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { error } from 'node:console';
@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactObject: any = {
    name: '',
    email: '',
    message: '',
  };

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm('service_0d9cmjp', 'template_vugjb3m', e.target as HTMLFormElement, {
        publicKey: '5reVtycikPcU8tboq',
      })
      .then(
        () => {
          console.log('Success!');
        },
        (error) => {
          console.log('Failed...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
