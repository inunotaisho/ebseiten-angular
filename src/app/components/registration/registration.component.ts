// import { Component, OnInit, OnDestroy, Input } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { NgForm, FormsModule, FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
// import { Subscription } from 'rxjs';
// import { User } from '../../models/user';
// import { AppSettings } from './../../common/config';
// import { NavbarComponent } from '../../common/navbar/navbar.component';
// import { NgIf } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.less'],
//   imports: [
//     NavbarComponent,
//     FormsModule,
//     NgIf,
//     TranslateModule
//   ],
//   standalone: true
// })

// export class RegistrationComponent implements OnDestroy {
//   @Input() user: User;

//   errorMessage = '';
//   submitted: any;

//   constructor(private http: HttpClient) {
//     this.user = new User();
//   }

//   registeration: object = {};

//   reg!: Subscription;

//   // ngOnInit(): void {
//   //     this.registeration = new FormGroup({
//   //         'username': new FormControl(this.user.username, [
//   //             Validators.required,

//   //         ])
//   //     })
//   // }

//   onSubmit(form: NgForm) {
//     this.reg = this.http.post(, this.user).subscribe((res) => {
//       // success status code 2xx
//       this.errorMessage = '';
//       form.reset();
//     }, (error) => {
//       // non success status code
//       this.errorMessage = error.json().message;
//     });

//   }
//   ngOnDestroy() {
//     if (this.reg !== undefined) {
//       this.reg.unsubscribe();
//     }
//   }

// }
