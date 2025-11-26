import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { WorkTabsComponent } from '../../banners/work-tabs/work-tabs.component';
import { WebContentComponent } from './web-content/web-content.component';
import { PoliticalWorkComponent } from './political-work/political-work.component';
import { LanguagePickerComponent, NavbarComponent, SocialBannerComponent } from "../../common";


@Component({
  imports: [
    WorkTabsComponent,
    WebContentComponent,
    PoliticalWorkComponent,
    NavbarComponent,
    SocialBannerComponent,
    NgIf,
    LanguagePickerComponent
],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  standalone:true
})
export class PortfolioComponent implements OnInit {

  tab =  'web';
  // items4 = [];
  constructor(
    private workTab: WorkTabsComponent
  ) { }

  onTabChange(tab: string) {
    console.log(tab);
    this.tab = tab;
  }

  ngOnInit() {
    // this.items4 = this.workTab.portTabs;
  }

  // onChangePage(pageOfItems: Array<any>) {
  //   // update current page of items
  //   this.pageOfItems = pageOfItems;
  // }

}
