import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguagePickerComponent, NavbarComponent, SocialBannerComponent } from '../../common';

@Component({
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  imports: [
    NavbarComponent,
    SocialBannerComponent,
    TranslateModule,
    LanguagePickerComponent
],
  standalone: true
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
