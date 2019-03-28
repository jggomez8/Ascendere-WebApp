import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indev-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  dataSource = [
    'https://cdn-images-1.medium.com/freeze/max/60/0*VcXcRE1NEvxBIUvi?q=20',
    'https://cdn-images-1.medium.com/max/1600/0*VcXcRE1NEvxBIUvi'
  ];
}
