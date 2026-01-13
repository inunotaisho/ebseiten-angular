import {
  Component,
  inject
} from '@angular/core';

import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SocialMediaContactComponent, SuccessFailureMessageComponent } from '../../banners';
import { LanguagePickerComponent, NavbarComponent } from "../../common";
import { IContact } from '../../models';
import { ContactStore } from './state/contact.store';


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

export class ContactComponent {
  private readonly contactStore = inject(ContactStore);
  private readonly fb = inject(FormBuilder);


  // Expose store signals to template
  readonly isSubmitting = this.contactStore.isSubmitting;
  readonly isSuccess = this.contactStore.isSuccess;
  readonly serverErrors = this.contactStore.serverErrors;
  readonly hasServerErrors = this.contactStore.hasServerErrors;
  readonly generalError = this.contactStore.generalError;
  readonly isDisabled = this.contactStore.isDisabled;

  constructor(
  ) { }


  readonly contactForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]],
    // Honeypot field - should remain empty
    _gotcha: [''],
  });


  onSubmit(): void {
    const rawData = this.contactForm.getRawValue();

    // Honeypot check: If _gotcha is filled, silent return (bot detected)
    if ((rawData._gotcha?.length ?? 0) > 0) {
      return;
    }

    if (this.contactForm.invalid || this.isDisabled()) {
      return;
    }

    this.contactStore.clearErrors();

    const data = this.contactForm.getRawValue();
    const formData: IContact = {
      firstName: data.firstName ?? '',
      lastName: data.lastName ?? '',
      email: data.email ?? '',
      subject: data.subject ?? '',
      message: data.message ?? '',
      _gotcha: data._gotcha ?? '',
    };

    this.contactStore.submitForm(formData);
  }

  /**
 * Get server-side error for a specific field.
 */
  getServerError(field: string): string | null {
    const errors = this.serverErrors();
    const error = errors.find((e) => e.field === field);
    return error?.message ?? null;
  }
}

