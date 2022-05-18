import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  sendStatus: string = 'Send'
  someFieldEmpty: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  public onSubmit(e: Event) {
    if (this.name && this.email && this.info !== '') {
      this.sendStatus = 'Sending...'
      emailjs.sendForm('service_v9cqahs', 'template_75bkjcj', e.target as HTMLFormElement, 'QklSpd4CPoE0j1orE')

        .then((result: EmailJSResponseStatus) => {
          if (result.text == 'OK') {
            this.hideForm = 'hidden';
            setTimeout(()=> this.router.navigate(['home']) 
        ,4500)
          }
        })
    } else {
      this.someFieldEmpty= true
      setTimeout(()=> {
        this.someFieldEmpty = false
      }, 3000)
    }
  }

  
}

