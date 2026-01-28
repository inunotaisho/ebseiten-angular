import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguagePickerComponent, NavbarComponent, SocialBannerComponent } from "../../common";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    RouterLink,
    NavbarComponent,
    SocialBannerComponent,
    TranslateModule,
    LanguagePickerComponent
  ],
  standalone: true
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      // throw new Error("Method not implemented.");
  }

}

