import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tip } from 'src/app/interfaces/tip';

@Component({
  selector: 'indev-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _route: ActivatedRoute) {}

  tips: Tip[];

  ngOnInit() {
    this.tips = this._route.snapshot.data['tips'] as Tip[];
  }
}
