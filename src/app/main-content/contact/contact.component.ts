import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  http = inject(HttpClient);

  email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = '';
  contactData = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'http://alexandra-deaconu.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };

  /**
   * subscribe to email status and value changes to update error messages
   */
  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges).subscribe(() =>
      this.updateErrorMessage()
    );
  }

  /**
   * method to update the error message based on email validation status
   */
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }

  /**
   * method to handle form submission
   * @param ngForm - form from Angular
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(
          this.post.endPoint,
          this.post.body(this.contactData),
          this.post.options
        )
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.email.reset('')
            console.info('Email sent successfully');
          },
          error: (error) => {
            console.error('Error sending email', error);
          },
        });
    }
  }
}
