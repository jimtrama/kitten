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
}
