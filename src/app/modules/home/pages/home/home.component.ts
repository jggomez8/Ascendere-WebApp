import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indev-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  markdown = `
  GitHub supports many extras in Markdown that help you reference and link to people. If you ever want to direct a comment at someone, you can prefix their name with an @ symbol: Hey @kneath — love your sweater!

  But I have to admit, tasks lists are my favorite:

  - [x] This is a complete item
  - [ ] This is an incomplete item

  When you include a task list in the first comment of an Issue, you will see a helpful progress bar in your list of issues. It works in Pull Requests, too!

  And, of course emoji!
  `;

  dataSource = [
    'https://cdn-images-1.medium.com/freeze/max/60/0*VcXcRE1NEvxBIUvi?q=20',
    'https://cdn-images-1.medium.com/max/1600/0*VcXcRE1NEvxBIUvi'
  ];
}
