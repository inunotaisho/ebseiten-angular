import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/authentication/authentication.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TranslateModule } from '@ngx-translate/core';

import { AppNavItems } from "../../models/navbar.model";
@Component({
  selector: 'app-navbar',
  imports: [
    NgClass,
    NgFor,
    NgIf,
    RouterLink,
    CollapseModule,
    TranslateModule,
  ],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  isCollapsed!: boolean;
  appNavItems!: AppNavItems[];

  constructor(
    // private authService: AuthService
  ) {
  }

  ngOnInit() {

    this.appNavItems = [
      {
        title: 'Navigate-Home',
        url: '',
        active: 'active'
      },
      {
        title: 'Navigate-Education',
        url: '/education',
        active: 'active'
      },
      {
        title: 'Navigate-Portfolio',
        url: '/portfolio',
        active: 'active'
      },
      {
        title: 'Navigate-Persona',
        url: '/persona',
        active: 'active',
        visible: true
      },
      {
        title: 'Navigate-Blog',
        url: '/blog',
        active: 'active'
      },
      {
        title: 'Navigate-Login',
        url: '/login',
        active: 'active',
        visible: true,
      },
      {
        icon: `fa fa-user fa-1x`,
        url: '/profile',
        active: 'active',
        visible: false,
      },
      {
        title: 'Navigate-Write',
        url: '/write',
        active: 'active',
        visible: false,
      },
      {
        title: 'Navigate-Logout',
        url: '',
        active: 'active',
        visible: false,
        loginStatus: false,
      },
      {
        title: 'Navigate-Contact',
        url: '/contact',
        active: 'active',
      }
    ];
  }

  isUserLoggedIn = () => {
    // return this.authService.getIsLoggedIn();
  }

  logout = () => {
    // this.authService.logout();
    // console.log('logging out');
  }
}
