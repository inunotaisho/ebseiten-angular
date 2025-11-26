import { HttpHeaders } from '@angular/common/http';

export const contentHeaders = new HttpHeaders();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Authorization', 'Bearer `${currentUser.user.token}`');
contentHeaders.append('Content-Type', 'application/json');

export const xWwwFormUrlEncodedHeaders = new HttpHeaders();
xWwwFormUrlEncodedHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
