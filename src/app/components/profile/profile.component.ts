import { Component, OnInit } from '@angular/core';
import { User } from '../../models';
import { LanguagePickerComponent, NavbarComponent } from "../../common";

@Component({
  imports: [
    NavbarComponent,
    LanguagePickerComponent
],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone:true
})
export class ProfileComponent implements OnInit {

  profile: User;

  constructor() {
    this.profile = new User();
  }

  ngOnInit() {
  }

}
