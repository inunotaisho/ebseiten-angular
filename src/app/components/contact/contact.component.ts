import { EmailService } from './../../services/email/email.service';
import {
  Component,
  effect,
  inject
} from '@angular/core';

import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SocialMediaContactComponent, SuccessFailureMessageComponent } from '../../banners';
import { LanguagePickerComponent, NavbarComponent } from "../../common";
import { IContact } from '../../models';
import { ContactStore } from './state/contact.store';
import { EmailoutcomeService } from '../../services/contact-outcome/emailoutcome.service';


@Component({
  standalone: true,
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
  providers:[
    ContactStore,
    SuccessFailureMessageComponent
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

})

export class ContactComponent {
  private readonly emailService = inject(EmailService);
  private readonly contactStore = inject(ContactStore);
  private readonly outcome =inject(EmailoutcomeService);
  private readonly sf = inject(SuccessFailureMessageComponent);
  private readonly fb = inject(FormBuilder);
  private cooldownTimer: ReturnType<typeof setInterval> | null = null;


  // Expose store signals to template
  readonly isSubmitting = this.contactStore.isSubmitting;
  readonly isSuccess = this.contactStore.isSuccess;
  readonly isFailure = this.contactStore.isFailure;
  readonly isFailing = this.contactStore.isFailing;
  readonly serverErrors = this.contactStore.serverErrors;
  readonly hasServerErrors = this.contactStore.hasServerErrors;
  readonly generalError = this.contactStore.generalError;
  readonly cooldownSeconds = this.contactStore.cooldownSeconds;
  readonly isDisabled = this.contactStore.isDisabled;


  readonly contactForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]],
    // Honeypot field - should remain empty
    _gotcha: [''],
  });


  // Form state management - disable when submitting or in cooldown
  private readonly _formStateEffect = effect(() => {
    const shouldDisable = this.isDisabled();
    if (shouldDisable) {
      this.contactForm.disable({ emitEvent: false });
    } else {
      this.contactForm.enable({ emitEvent: false });
    }
  });

  // Show success toast when submission succeeds
  private readonly _successEffect = effect(() => {
    if (this.isSuccess()) {
      this.outcome.show(this.sf.onSubmitSuccess());
        this.emailService.startCooldown();
      this.contactForm.reset();
    } else {
      this.outcome.show(this.sf.onSubmitFailure());
    }
  });


  constructor(
  ) {
    // Update cooldown every second
    this.cooldownTimer = setInterval(() => {
      this.updateCooldown();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.cooldownTimer !== null) {
      clearInterval(this.cooldownTimer);
    }
  }

  private updateCooldown(): void {
    const remaining = this.emailService.getRemainingCooldown();
    this.contactStore.setCooldown(remaining);
  }

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

  isRateLimited(): boolean {
    return this.emailService.isRateLimited();
  }
}

