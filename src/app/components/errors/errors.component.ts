import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent, LanguagePickerComponent } from '../../common';

@Component({
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss'],
  imports: [
    NavbarComponent,
    TranslateModule,
    LanguagePickerComponent
  ],
  standalone: true
})
export class ErrorsComponent implements OnInit {

  data: any = {};

  constructor() {

  }

  ngOnInit() {

  }

}


