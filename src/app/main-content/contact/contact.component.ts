import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { IntersectionObserverService } from '../../service/intersection-observer.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('textAnimation') textAnimation!: ElementRef;

  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  message = new FormControl('', Validators.required);
  privacyPolicy = new FormControl(false, Validators.requiredTrue);

  errorMessage = '';
  privacyPolicyError = false;

  post = {
    endPoint: 'https://alexandra-deaconu.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };

  constructor(
    private http: HttpClient,
    private interstionObs: IntersectionObserverService
  ) {
    merge(this.email.statusChanges, this.email.valueChanges).subscribe(() =>
      this.updateErrorMessage()
    );
  }

  ngAfterViewInit(): void {
    this.interstionObs.observeAnimatedText(this.textAnimation.nativeElement);
  }

  // Method to update error message based on email validation status
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }

  // Method to handle form submission
  onSubmit() {
    this.email.markAsTouched();
    this.firstName.markAsTouched();
    this.lastName.markAsTouched();
    this.message.markAsTouched();
    this.privacyPolicy.markAsTouched();

    if (
      this.email.valid &&
      this.firstName.valid &&
      this.lastName.valid &&
      this.message.valid &&
      this.privacyPolicy.valid
    ) {
      const formData = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        email: this.email.value,
        message: this.message.value,
        privacyPolicy: this.privacyPolicy.value,
      };

      this.http
        .post(this.post.endPoint, this.post.body(formData), this.post.options)
        .subscribe({
          next: (response) => {
            this.resetForm();
            this.resetPrivacyPolicyError();
            console.info('Email sent successfully');
          },
          error: (error) => {
            console.error('Error sending email', error);
          },
        });
    } else {
      this.privacyPolicyError = !this.privacyPolicy.value;
    }
  }

  // Method to reset form fields
  resetForm() {
    this.email.reset();
    this.firstName.reset();
    this.lastName.reset();
    this.message.reset();
    this.privacyPolicy.reset(false);
  }

  // Method to reset privacy policy error
  resetPrivacyPolicyError() {
    this.privacyPolicyError = false;
  }
}
