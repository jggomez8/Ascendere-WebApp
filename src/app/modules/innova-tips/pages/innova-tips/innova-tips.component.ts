import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'indev-innova-tips',
  templateUrl: './innova-tips.component.html',
  styleUrls: ['./innova-tips.component.scss']
})
export class InnovaTipsComponent implements OnInit {
  public innovaTips;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this.innovaTips = this._route.snapshot.data['innovaTips'];
  }
}
