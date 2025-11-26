import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../../services/authentication/authentication.service';

@Injectable()
export class AuthGuard {
  // constructor(private authService: AuthService, private router: Router) {

  // }
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   if (this.authService.isLoggedIn) {
  //     return true;
  //   }
  //   this.router.navigate(['login'], { queryParams: {returnUrl: state.url}});
  //   return false;
  // }
}

/**
 * If the user is already logged in, and attempts to navigate to /login, then redirect them to home.
 */

// @Injectable()
// export class AlreadyLoggedIn implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {

//   }

//   canActivate(): boolean {
//     if (this.authService.isLoggedIn) {
//       this.router.navigate(['/']);
//       return false;
//     }

//     return true;
//   }
// }

