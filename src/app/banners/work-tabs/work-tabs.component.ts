import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-work-tabs',
  standalone: true,
  imports: [],
  templateUrl: './work-tabs.component.html',
  styleUrls: ['./work-tabs.component.scss']
})
export class WorkTabsComponent implements OnInit {
  @Input() p: any;
  @Output() tabClick = new EventEmitter();

  constructor() { }

  portTabs = [{
    name: 'Web Development'
  }, {
    name: 'Political'
  }];

  ngOnInit() {}

}
