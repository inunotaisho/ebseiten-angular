import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Language, LANGUAGE_CONFIG } from '../../models';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-language-picker',
  standalone:true,
  imports: [
    CollapseModule,
    TranslateModule,
    CommonModule,
    NgFor,
    NgClass
  ],
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent implements OnInit {

  selectedLanguage?: Language;
  languages: Language[] = LANGUAGE_CONFIG;

  isChangingLanguages!: boolean;
  isCollapsed!: boolean;

  constructor(
    private translateService: TranslateService,
  ) { }
ngOnInit() {

    this.changeLangTo(
      this.languages.find(
        item => item.languageCode === this.translateService.currentLang,
      ) ?? this.languages[0]
    );

    this.translateService.onLangChange
      .subscribe(
        (next) => {
          this.changeLangTo(
            this.languages.find(
              item => item.languageCode === next.lang,
            ) ?? this.languages[0]
          );
        }
      );
  }

  changeLangTo(lang: Language) {
    console.log(lang, this.selectedLanguage);
    if (this.selectedLanguage && (this.selectedLanguage.languageCode === lang.languageCode)) {
      return;
    }

    this.selectedLanguage = lang;

    this.translateService
      .use(
        lang.languageCode,
      ).subscribe(
        (success) => {
          this.isChangingLanguages = false;
        },
        error => {
          this.isChangingLanguages = false;

        }
      );
  }



}
