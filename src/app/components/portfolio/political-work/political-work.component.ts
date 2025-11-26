import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-political-work',
  templateUrl: './political-work.component.html',
  styleUrls: ['./political-work.component.scss'],
  standalone: true
})
export class PoliticalWorkComponent implements OnInit {

  constructor() { }

  politicalContent = [
    {
      title: 'Doug Jones for Senate',
      href1: 'https://dougjones.com/',
      image: '../../../../assets/images/Doug-Jones-for-Senate.svg',
      // tslint:disable-next-line:max-line-length
      href2: 'https://en.wikipedia.org/w/index.php?title=2017_United_States_Senate_special_election_in_Alabama&diff=811459930&oldid=811454841'
    }];


  ngOnInit() {
  }



}
