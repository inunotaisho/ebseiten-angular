
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, NgForm } from '@angular/forms';
import { AppSettings } from '../../common/config';
import { catchError, EMPTY, take, tap } from 'rxjs';
import { getSingleError } from '../../common/error';
import { IContact } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  public showForm!: boolean;
  public showSuccessMsg!: boolean;
  public showErrorMsg!: boolean;

  public attemptingToContact!: boolean;


  constructor(
    private http: HttpClient,
    public contactForm: FormGroup,
  ) { }


    contactHelper(req: object) : void {
        this.showForm = true;
    }



  sendEmail(contactForm: IContact) {
    if (this.attemptingToContact) {
      return EMPTY
    }
    this.attemptingToContact = true;
    const data = contactForm;
    return this.http.post(AppSettings.API_SERVER + '/send-email', data, { observe: 'response' }).pipe(
      take(1),
      tap(() => {
        this.showSuccessMsg = true;
      })
    ),
      catchError((error, caught) => {

        this.showErrorMsg = true;

        getSingleError(error);

        return EMPTY
      })
  }
}

