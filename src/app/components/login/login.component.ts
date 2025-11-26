import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, EMPTY, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguagePickerComponent, NavbarComponent } from "../../common";
import { JwtResponse, User } from '../../models';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    NavbarComponent,
    NgClass,
    NgIf,
    FormsModule,
    AsyncPipe,
    ReactiveFormsModule,
    TranslateModule,
    LanguagePickerComponent
],
  standalone: true
})
export class LoginComponent implements OnInit {

  userForm!: FormGroup;
  user$: Observable<JwtResponse> = EMPTY;
  user: User = new User();

  constructor(
    private fb: FormBuilder,
    // private authService: AuthService
  ) {


  }


  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  loginUser = () => {
    if (this.userForm.valid) {
      this.user$ = of(this.userForm.value).pipe(

        // Bjorn Schijff:

        // switchMap will take the value coming in, map that value to another Observable and
        // switches the subscription to the new Observable.
        // must return an Observable

        // switchMap(user => this.authService.loginUser(user))
      );
    }
  }
}





