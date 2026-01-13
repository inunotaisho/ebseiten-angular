import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap, throwError } from 'rxjs';

import type { IContact } from '../../models';
import { AppSettings } from '../../common/config';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private readonly http = inject(HttpClient);
  private readonly STORAGE_KEY = 'eb_contact_last_submission';
  private readonly COOLDOWN_MS = 30000;

  /**
   * Send contact message to Formspree.
   *
   * @param formData The form data to send
   * @returns Observable that completes on success
   * @throws HttpErrorResponse with Formspree validation errors on 422
   * @throws Error if rate limited or endpoint missing
   */
  sendContactMessage(formData: IContact): Observable<void> {
    if (this.isRateLimited()) {
      return throwError(() => new Error('Please wait 30 seconds before submitting again.'));
    }



    // Let HTTP errors propagate naturally for the store to handle
    return this.http
      .post<unknown>(AppSettings.API_SERVER + '/send-email', formData, {
        headers: { Accept: 'application/json' },
      })
      .pipe(
        tap(() => {
          this.recordSubmission();
        }),
        // Discard response body, return void observable
        map((): void => undefined),
      );
  }

  /**
   * Check if the user is currently rate limited.
   */
  isRateLimited(): boolean {
    const lastSubmission = localStorage.getItem(this.STORAGE_KEY);
    if (lastSubmission === null) return false;

    const timePassed = Date.now() - parseInt(lastSubmission, 10);
    return timePassed < this.COOLDOWN_MS;
  }

  /**
   * Get the remaining cooldown time in seconds.
   */
  getRemainingCooldown(): number {
    const lastSubmission = localStorage.getItem(this.STORAGE_KEY);
    if (lastSubmission === null) return 0;

    const timePassed = Date.now() - parseInt(lastSubmission, 10);
    if (timePassed >= this.COOLDOWN_MS) return 0;

    return Math.ceil((this.COOLDOWN_MS - timePassed) / 1000);
  }

  /**
   * Start the cooldown timer manually.
   * Useful for UI testing or forcing a cooldown state.
   */
  startCooldown(): void {
    this.recordSubmission();
  }

  private recordSubmission(): void {
    localStorage.setItem(this.STORAGE_KEY, Date.now().toString());
  }
}
