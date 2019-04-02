import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'indev-ascendere',
  templateUrl: './ascendere.component.html',
  styleUrls: ['./ascendere.component.scss']
})
export class AscendereComponent implements AfterViewInit {
  constructor() {}

  @ViewChild('body') bodyRef: ElementRef;
  @ViewChild('main') mainRef: ElementRef;

  ngAfterViewInit() {
    const bodyEl = this.bodyRef.nativeElement as HTMLElement;
    const mainEl = this.mainRef.nativeElement as HTMLElement;
    window.addEventListener('scroll', () => {
      if (window.scrollY + window.innerHeight > mainEl.offsetHeight) {
        bodyEl.classList.add('tight');
      } else if (bodyEl.classList.contains('tight')) {
        bodyEl.classList.remove('tight');
      }
    });
  }

  presentationMode() {
    const bodyEl = this.bodyRef.nativeElement as HTMLElement;
    const mainEl = this.mainRef.nativeElement as HTMLElement;
    if (bodyEl.classList.contains('tight')) {
      window.scrollTo({
        top: mainEl.offsetHeight - window.innerHeight,
        behavior: 'smooth'
      });
    }
  }
}
