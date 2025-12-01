import { Component, OnDestroy } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { SocialMediaContactComponent, SuccessFailureMessageComponent } from '../../banners';
import { AppSettings } from '../../common/config';
import { LanguagePickerComponent, NavbarComponent } from "../../common";


@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [
    NavbarComponent,
    SocialMediaContactComponent,
    SuccessFailureMessageComponent,
    NgIf,
    NgClass,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    LanguagePickerComponent
],
  standalone: true
})

export class ContactComponent implements OnDestroy {

  subscribe!: Subscription;
  showForm = true;
  successFailure!: SuccessFailureMessageComponent;
  submitted: any;
  valid: any;
  errors: any;

  constructor(
    private http: HttpClient,
  ) { }

  sendEmail(contactForm: NgForm) {
    const data = contactForm.value
    return this.http.post(AppSettings.API_SERVER + '/send-email', data, { observe: 'response' });
  }

  onSubmit(contactForm: NgForm) {
    this.sendEmail(contactForm.value).subscribe(
      res => {
        if (res.status === 200) {
          contactForm.reset();
          this.showForm = false;
          this.successFailure.onSubmitSuccess();
        }
      },
      err => {
        if (err.message) {
          this.showForm = false;
          this.successFailure.onSubmitFailure();
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.subscribe) {
      this.subscribe.unsubscribe();
    }
  }
}

