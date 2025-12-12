import { JwtResponse } from '../../models/jwt-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, Observable, EMPTY } from 'rxjs';
import { tap, catchError, take } from 'rxjs/operators';

import { AppSettings } from './../../common/config';
import { contentHeaders } from './../../common/headers';
import { IUser } from '../../models/user';
import { getSingleError } from '../../common/error';


@Injectable()
export class AuthService {

  // public isLoggedIn!: boolean;
  // public jwtToken!: string;
  // public username!: string;

  // public attemptingToLogIn!: boolean;
  // public redirectUrl!: string;


  // constructor(
  //   private router: Router,
  //   private http: HttpClient,
  // ) {

  //   const clientJWT = localStorage.getItem(AppSettings.JWT_TOKEN_KEY);
  //   const username = localStorage.getItem(AppSettings.USERNAME);
  //   const clientProfile = localStorage.getItem(AppSettings.PROFILE_KEY);

  //   if (clientJWT) {
  //     this.loginHelper({ token: clientJWT, username });
  //   } else {
  //     this.reset();
  //   }
  // }



  // reset(): void {

  //   this.isLoggedIn = false;
  //   this.attemptingToLogIn = false;
  //   this.jwtToken = null;

  //   localStorage.clear();
  // }

  // loginHelper(response: object): void {
  //   this.isLoggedIn = true;
  //   this.jwtToken = response[`token`];
  //   this.username = response[`username`];

  //   // persist to cache
  //   localStorage.setItem(AppSettings.JWT_TOKEN_KEY, this.jwtToken);
  //   localStorage.setItem(AppSettings.USERNAME, response[`username`]);
  // }

  // getIsLoggedIn() {
  //   return this.isLoggedIn;
  // }

  // loginUser(user: User): Observable<JwtResponse> {
  //   /* prevent simultaneous logins and race conditions */
  //   if (this.attemptingToLogIn) {
  //     return EMPTY;
  //   }
  //   this.attemptingToLogIn = true;
  //   return this.http.post(AppSettings.API_SERVER + '/api/login/authenticate', user, { headers: contentHeaders }).pipe(
  //     take(1),
  //     tap((res: JwtResponse) => {
  //       this.reset();
  //       this.loginHelper(res);

  //       let navigateTarget = '/';

  //       if (this.redirectUrl) {
  //         navigateTarget = this.redirectUrl;
  //         this.redirectUrl = null;
  //       }
  //       this.router.navigate([navigateTarget]);
  //     }),
  //     catchError((error, caught) => {
  //       this.reset();

  //       getSingleError(error);

  //       return EMPTY;
  //     })
  //   );
  // }

  // logout() {
  //   this.reset();

  //   this.router.navigate(['/']);

  // }

  // getAuthHeader(headers: HttpHeaders): HttpHeaders {
  //   // if our current token is expired
  //   const headersWithAuth = headers.append('Authorization', 'Bearer ' + this.getToken());

  //   return headersWithAuth;
  // }

  // getToken(): string {
  //   return this.jwtToken;
  // }

  // getUsername(): string {
  //   return this.username;
  // }
}
