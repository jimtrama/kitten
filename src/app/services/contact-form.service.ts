import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailJSResponseStatus } from '@emailjs/browser/es/models/EmailJSResponseStatus';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactFormService {

  private $emailSent:Subject<boolean> = new Subject();
  emailSentSuccessfully = this.$emailSent.asObservable();

  constructor(private http: HttpClient) {}

  sendMail(
    full_name: string,
    city: string,
    postal_code: string,
    address: string,
    email: string,
    message = ''
  ) {
    let data = {
      service_id: 'service_9gwbgo9',
      template_id: 'template_grifas8',
      user_id: 'O5tMyICj-xEdOPY7O',
      template_params: {
        full_name,
        city,
        postal_code,
        address,
        message,
        email,
      },
    };

    return this.http
      .post(
        'https://api.emailjs.com/api/v1.0/email/send',
        JSON.stringify(data),{headers: { 'Content-type': 'application/json' },}
      )
      .subscribe(
        () => {
          console.log('SUCCESS!');
          this.$emailSent.next(true);
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          this.$emailSent.next(false);
        }
      );
  }
}
