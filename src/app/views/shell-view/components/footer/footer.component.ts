import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'indev-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  spotEasterEgg() {
    alert('Felicidades. Me atrapaste');
  }
}
