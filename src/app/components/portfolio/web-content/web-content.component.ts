import { Component, OnInit } from '@angular/core';
import { ReusableImgComponent } from '../../../common';
import { NgFor } from '@angular/common';
import { PortfolioContent } from '../../../models';

@Component({
  selector: 'app-web-content',
  imports:[
    ReusableImgComponent,
    NgFor
  ],
  templateUrl: './web-content.component.html',
  styleUrls: ['./web-content.component.scss'],
  standalone: true

})
export class WebContentComponent implements OnInit {

  constructor(
    private ruImgComp: ReusableImgComponent
  ) { }

  items1!: PortfolioContent[];
  items2!: PortfolioContent[];
  items3!: PortfolioContent[];

  webPortfolioImgs() {
    this.items1 = this.ruImgComp.portfolioContent1;
    this.items2 = this.ruImgComp.portfolioContent2;
    this.items3 = this.ruImgComp.portfolioContent3;
  }

  ngOnInit() {
    this.webPortfolioImgs();
  }

}
