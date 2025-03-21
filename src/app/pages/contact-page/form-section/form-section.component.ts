import { Component } from '@angular/core';
import { ContactFormService } from '../../../services/contact-form.service';

@Component({
  selector: 'app-form-section',
  standalone: false,
  templateUrl: './form-section.component.html',
  styleUrl: './form-section.component.scss',
})
export class FormSectionComponent {
  constructor(private contactFormService: ContactFormService) {}
  public sendEmail() {
    this.contactFormService.sendMail(
      "jim tram",
      "Thessaloniki",
      "54643",
      'Karamanli 32',
      'dimeragon@gmail.com',
      "Litourgi !!! tora dokimazo me ligo megalitero keimeno")
  }
}
