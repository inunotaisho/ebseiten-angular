import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { EMPTY, Observable, of, Subscription, switchMap } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { SocialMediaContactComponent, SuccessFailureMessageComponent } from '../../banners';
import { LanguagePickerComponent, NavbarComponent } from "../../common";
import { IContact } from '../../models';
import { EmailService } from '../../services/email/email.service';


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

export class ContactComponent implements OnInit {


  contact$: /* need something similar to Observable<JwtResponse> = EMPTY in order to use switchmap from rxjs*/;
  subscribe!: Subscription;
  showForm = true;
  successFailure!: SuccessFailureMessageComponent;
  submitted: any;
  valid: any;
  errors: any;



  constructor(
    private fb: FormBuilder,
    public contactForm: FormGroup,
    private emailService: EmailService
  ) { }

      ngOnInit(): void {
      this.contactForm = this.fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required]],
        subject: ['', [Validators.required]],
        message: ['', [Validators.required]]
      });
    }

  onSubmit = () => {
    if (this.contactForm.valid) {
      this.contact$ = of(this.contactForm.value).pipe(

        // Bjorn Schijff:

        // switchMap will take the value coming in, map that value to another Observable and
        // switches the subscription to the new Observable.
        // must return an Observable

        switchMap(contactForm => this.emailService.sendEmail(contactForm))
      );






    }
  }
}

