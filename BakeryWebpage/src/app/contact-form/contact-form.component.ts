import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  name: string = ''
  email: string = ''
  number: number | string = ''
  info: string = ''
  hideForm: string = ''
  constructor() { }

  ngOnInit(): void {

  }
  public onSubmit(e: Event) {
    if (this.name && this.email && this.info !== '') {
      e.preventDefault();
      emailjs.sendForm('service_v9cqahs', 'template_75bkjcj', e.target as HTMLFormElement, 'QklSpd4CPoE0j1orE')

        .then((result: EmailJSResponseStatus) => {
          if (result.text == 'OK') {
            this.name = ''
            this.email = ''
            this.number = ''
            this.info = ''
            this.hideForm = 'hidden'
          }
        })
    } else {
      alert('message not sent')
    }
  }
}
