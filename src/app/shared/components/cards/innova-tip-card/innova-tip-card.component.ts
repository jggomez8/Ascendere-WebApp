import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { InnovaTip } from 'src/app/interfaces/innova-tip';

@Component({
  selector: 'indev-innova-tip-card',
  templateUrl: './innova-tip-card.component.html',
  styleUrls: ['./innova-tip-card.component.scss']
})
export class InnovaTipCardComponent {
  @Input() innovaTip: InnovaTip;

  @ViewChild('modal') modalRef: ElementRef;

  actionModal() {
    let modal = this.modalRef.nativeElement as HTMLElement;
    if (modal.classList.contains('active')) {
      modal.classList.remove('active');
      document.documentElement.style.overflow = 'auto';

      return;
    }
    modal.classList.add('active');
    document.documentElement.style.overflow = 'hidden';
  }
}
