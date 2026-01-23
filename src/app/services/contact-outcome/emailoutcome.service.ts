import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class EmailoutcomeService {

  /**
   * Records whether the contact message was successfully sent or failed.
   * @param success - true if message was sent successfully, false if it failed
   */
  show(success: boolean): void {
    // This can be used for analytics, logging, or other tracking purposes
    // Implementation can be extended as needed
  }

}
