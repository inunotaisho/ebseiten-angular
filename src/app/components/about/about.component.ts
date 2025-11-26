import { Component, OnInit } from '@angular/core';
import { NavbarComponent, SocialBannerComponent, LanguagePickerComponent } from '../../common'

@Component({
  selector: 'app-about',
  imports: [
    NavbarComponent,
    SocialBannerComponent,
    LanguagePickerComponent
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
