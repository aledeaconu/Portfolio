import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { IntersectionObserverService } from '../../service/intersection-observer.service';
import AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements AfterViewInit, OnInit {
  @ViewChild('textAnimation') textAnimation!: ElementRef;
  email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = '';

  contactData = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  privacyPolicy = new FormControl(false, Validators.requiredTrue);
  privacyPolicyError = false;

  post = {
    endPoint: 'https://alexandra-deaconu.com/helpers/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };

  constructor(
    private http: HttpClient,
    private interstionObs: IntersectionObserverService,
    @Inject(PLATFORM_ID) private platformID: Object
  ) {
    merge(this.email.statusChanges, this.email.valueChanges).subscribe(() =>
      this.updateErrorMessage()
    );
    this.privacyPolicy.valueChanges.subscribe(() => this.updatePrivacyPolicyError())
  }

  ngAfterViewInit(): void {
    this.interstionObs.observeAnimatedText(this.textAnimation.nativeElement);
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformID)) {
      AOS.init();
    }
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

  updatePrivacyPolicyError(){
    this.privacyPolicyError = false
  }
  // Method to handle form submission
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.privacyPolicy.valid) {
      this.http
        .post(
          this.post.endPoint,
          this.post.body(this.contactData),
          this.post.options
        )
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.email.reset('');
            this.privacyPolicy.reset(false);
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
}
