import { Component, OnInit } from '@angular/core';
import { SocialMediaItems } from '../../models';
import { NgClass, NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-social',
  imports: [
    NgFor,
    NgClass,
    TranslateModule
  ],
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  standalone: true
})
export class SocialBannerComponent implements OnInit {

    socialMediaItems!: SocialMediaItems[];

  constructor() { }

  ngOnInit() {

        this.socialMediaItems = [
      {
        socialMediaName: 'Social-Media-Name-1',
        socialUrl: 'Social-Url-1',
        socialImgUrl: 'Social-Img-Url-1',
        alt: 'Social-Media-Name-1',
        visible: true
      },
      {
        socialMediaName: 'Social-Media-Name-2',
        socialUrl: 'Social-Url-2',
        socialImgUrl: 'Social-Img-Url-2',
        alt: 'Social-Media-Name-2',
        visible: this.screenSize()
      },
      {
        socialMediaName: 'Social-Media-Name-4',
        socialUrl: 'Social-Url-4',
        socialImgUrl: 'Social-Img-Url-4',
        alt: 'Social-Media-Name-4 ',
        visible: this.screenSize()
      }
    ]
  }

  screenSize(): boolean {
    if( screen.width <= 991) {
      return false
    } else {
       return true
    }
  }

}
