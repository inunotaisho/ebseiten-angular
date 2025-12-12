
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, NgForm } from '@angular/forms';
import { AppSettings } from '../../common/config';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private http: HttpClient,
    public contactForm: FormGroup,
  ) { }


    sendEmail(contactForm: NgForm) {
    const data = contactForm.value
    return this.http.post(AppSettings.API_SERVER + '/send-email', data, { observe: 'response' });
  }
}

