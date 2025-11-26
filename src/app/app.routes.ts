import { Routes } from '@angular/router';
import { AuthGuard } from './common/authguard/authguard.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch:"full",
    loadComponent: () => import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'education',
    loadComponent: () => import('./components/education/education.component').then( m => m.EducationComponent)
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./components/portfolio/portfolio.component').then( m => m.PortfolioComponent)
  },
    {
    path: 'blog',
    loadComponent: () => import('./components/blog/blog.component').then( m => m.BlogComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then( m => m.LoginComponent),
  },
  {
    path: 'logout',
    redirectTo:''
  },
  {
    path:'about',
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
  },
  // {
  //   path: 'profile',
  //   loadComponent: () => import('./components/profile/profile.component').then( m => m.ProfileComponent),
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'create',
  //   loadComponent: () => import('./components/blog/write/write.component').then( m => m.WriteComponent),
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'sign-up',
  //   loadComponent: () => import('./components/registration/registration.component').then( m => m.RegistrationComponent)
  // },
  {
    path: 'contact',
    loadComponent: () => import('./components/contact/contact.component').then( m => m.ContactComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./components/errors/errors.component').then( m => m.ErrorsComponent)
  }
];
