import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-img',
  templateUrl: './reusable-img.component.html',
  styleUrls: ['./reusable-img.component.scss'],
  standalone: true
})
export class ReusableImgComponent implements OnInit {

  @Input() p: any;

  constructor() { }

  portfolioContent1 = [
    {
      title: 'Border Land of the Rockies',
      href: '/',
      image: '../../../../assets/images/borderlandoftherockies.png',
    },
    {
      title: 'First Professional Website',
      href: '/',
      image: '../../../../assets/images/ebfairweather-1.png',
    }];

    portfolioContent2 = [
    {
      title: 'Triple Care',
      href: '/',
      image: '../../../../assets/images/Screen Shot 2016-01-14 at 12.15.35 PM.png',
    },
    {
      title: 'Inc Financial',
      href: 'http://incwealth.com/',
      image: '../../../../assets/images/incwealth.png'
    }
  ];

  portfolioContent3 = [
    {
      title: 'Smart Response',
      href: 'http://www.smartresponse.org/',
      image: '../../../../assets/images/smartresponse.png'
    }];

  ngOnInit() {
  }

}
