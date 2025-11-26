import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SocialMediaItems } from '../../models';

@Component({
  selector: 'app-social-media-contact',
  standalone: true,
  imports: [
    NgFor,
    TranslateModule
  ],
  templateUrl: './social-media-contact.component.html',
  styleUrl: './social-media-contact.component.scss'
})
export class SocialMediaContactComponent implements OnInit {
  socialMediaItems!: SocialMediaItems[];

  constructor() { }
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
        socialMediaName: 'Social-Media-Name-6',
        socialUrl: 'Social-Url-6',
        socialImgUrl: 'Social-Img-Url-6',
        alt: 'Social-Media-Name-6'
      },
      {
        socialMediaName: 'Social-Media-Name-5',
        socialUrl: 'Social-Url-5',
        socialImgUrl: 'Social-Img-Url-5',
        alt: 'Social-Media-Name-5'
      }
    ]
  }

}
