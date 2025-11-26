import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SocialMediaItems } from '../../models';

@Component({
  selector: 'app-success-failure-message',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    TranslateModule
  ],
  templateUrl: './success-failure-message.component.html',
  styleUrl: './success-failure-message.component.scss'
})
export class SuccessFailureMessageComponent implements OnInit {
  showSuccessMsg = false;
  showErrorMsg = false;
  socialMediaItems!: SocialMediaItems[];

  constructor() {

  }

    ngOnInit() {

    this.socialMediaItems = [
      {
        socialMediaName: 'Social-Media-Name-1',
        socialUrl: 'Social-Url-1',
        socialImgUrl: 'Social-Img-Url-1',
        alt: 'Social-Media-Name-1'
      },
      {
        socialMediaName: 'Social-Media-Name-2',
        socialUrl: 'Social-Url-2',
        socialImgUrl: 'Social-Img-Url-2',
        alt: 'Social-Media-Name-2'
      },
      {
        socialMediaName: 'Social-Media-Name-3',
        socialUrl: 'Social-Url-3',
        socialImgUrl: 'Social-Img-Url-3',
        alt: 'Social-Media-Name-3'
      },
      {
        socialMediaName: 'Social-Media-Name-4',
        socialUrl: 'Social-Url-4',
        socialImgUrl: 'Social-Img-Url-4',
        alt: 'Social-Media-Name-4'
      },
      {
        socialMediaName: 'Social-Media-Name-5',
        socialUrl: 'Social-Url-5',
        socialImgUrl: 'Social-Img-Url-5',
        alt: 'Social-Media-Name-5'
      },
    ];
  }

    onSubmitSuccess() {
    this.showSuccessMsg = true;
  }

  onSubmitFailure() {
    this.showErrorMsg = true;
  }

}
