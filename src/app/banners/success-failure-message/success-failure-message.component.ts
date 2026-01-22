import { NgFor, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class SuccessFailureMessageComponent implements OnInit, OnDestroy {
  socialMediaItems!: SocialMediaItems[];
  showSuccessMsg = false;
  showErrorMsg = false;
  private clearTimer: ReturnType<typeof setTimeout> | null = null;

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
    this.showErrorMsg = false;
    this.startClearTimer();
  }

  onSubmitFailure() {
    this.showErrorMsg = true;
    this.showSuccessMsg = false;
    this.startClearTimer();
  }

  private startClearTimer(): void {
    // Clear any existing timer
    if (this.clearTimer) {
      clearTimeout(this.clearTimer);
    }
    
    // Set timer to clear messages after 5 seconds
    this.clearTimer = setTimeout(() => {
      this.showSuccessMsg = false;
      this.showErrorMsg = false;
      this.clearTimer = null;
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.clearTimer) {
      clearTimeout(this.clearTimer);
    }
  }
}
