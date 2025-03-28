import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ContactFormService } from '../../../services/contact-form.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { of, Subscription } from 'rxjs';

type InputName =
  | 'full_name'
  | 'email'
  | 'postal_code'
  | 'address'
  | 'city'
  | 'message';
@Component({
  selector: 'app-form-section',
  standalone: false,
  templateUrl: './form-section.component.html',
  styleUrl: './form-section.component.css',
})
export class FormSectionComponent implements OnDestroy {
  contactForm: FormGroup;
  error: string = '';
  loading = false;
  sub:Subscription;
  @ViewChild('submitBtn')
  subBtn!:ElementRef;

  constructor(
    private contactFormService: ContactFormService,
    private formBuilder: FormBuilder
  ) {
    this.contactForm = this.formBuilder.group({
      full_name: ['', Validators.required],
      email: ['', Validators.required, this.emailValidator],
      postal_code: ['', Validators.required, this.postalValidator],
      address: ['', Validators.required],
      message: [''],
      city: ['', Validators.required],
    });
    this.sub = this.contactFormService.emailSentSuccessfully.subscribe((ok)=>{
      this.loading = false;
      this.contactForm.reset();
      (<HTMLInputElement>document.getElementById("checkbox")).checked = false;
      if(ok){
        console.log("ok");
      }else{
        console.log("smth went wrong");
      }
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getInput(input: InputName): AbstractControl | null {
    return this.contactForm.get(input);
  }

  private wiggleBtn(){
    (<HTMLInputElement>this.subBtn.nativeElement).classList.add('wiggle');
    setTimeout(()=>{(<HTMLInputElement>this.subBtn.nativeElement).classList.remove('wiggle')},200)
  }


  onSubmit() {
    console.log(this.contactForm);
    if (!this.contactForm.valid) {
      this.error = 'Invalid form. Please fix the errors and re-try 😊';
      this.contactForm.markAllAsTouched();
      console.log(this.error);
      console.log(
       this.getInput('email')?.hasError('email')
      );
      this.wiggleBtn();
      return;
    }

    if (!(<HTMLInputElement>document.getElementById("checkbox")).checked) {
      this.error = 'Please accept Terms & Conditions ✅';
      console.log(this.error);
      this.wiggleBtn();
      return;
    }

    
    this.loading = true;
    this.error = '';
    let name = this.getInput('full_name')?.value.trim();
    let email = this.getInput('email')?.value.trim();
    let postal_code = this.getInput('postal_code')?.value.trim();
    let address = this.getInput('address')?.value.trim();
    let city = this.getInput('city')?.value.trim();
    let message = this.getInput('message')?.value.trim();
    this.contactFormService.sendMail(name,city,postal_code,address,email,message);
  }

  emailValidator(control: AbstractControl): any {
    if (control.value) {
      const matches = control.value.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      );
      return matches ? of(null) : of({ email: true });
    } else {
      return of(null);
    }
  }

  postalValidator(control: AbstractControl): any {
    return control.value.length == 5
      ? of(null)
      : of({ post: true });
  }
}
