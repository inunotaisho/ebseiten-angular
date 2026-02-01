import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
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
  @Output() resetForm = new EventEmitter<void>();

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

  /**
   * Called on successful submission. Message stays visible until parent hides it (cooldown ends).
   */
  onSubmitSuccess() {
    this.showSuccessMsg = true;
    this.showErrorMsg = false;
    this.cancelClearTimer();
  }

  /**
   * Called on failed submission. Message auto-clears after 5 seconds and notifies parent.
   */
  onSubmitFailure() {
    this.showErrorMsg = true;
    this.showSuccessMsg = false;
    this.startFailureClearTimer();
  }

  private cancelClearTimer(): void {
    if (this.clearTimer) {
      clearTimeout(this.clearTimer);
      this.clearTimer = null;
    }
  }

  private startFailureClearTimer(): void {
    this.cancelClearTimer();
    this.clearTimer = setTimeout(() => {
      this.showSuccessMsg = false;
      this.showErrorMsg = false;
      this.clearTimer = null;
      this.resetForm.emit();
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.clearTimer) {
      clearTimeout(this.clearTimer);
    }
  }
}
