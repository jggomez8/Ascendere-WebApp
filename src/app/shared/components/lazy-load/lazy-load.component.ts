import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';

/**
 * Lazy load components or elements using Interception Observer API
 */

// Animation when component appears
const TRANSITIONS = ['fade-in', 'translate'];

@Component({
  selector: 'indev-lazy-load',
  template: `
    <div class="lazy-load">
      <ng-content *ngIf="loaded"></ng-content>
    </div>
  `,
  styleUrls: ['./lazy-load.component.scss']
})
export class LazyLoadComponent implements AfterViewInit {
  // TODO: Improve or remove this component
  // Transition elements will use when loaded
  @Input() transition: string = 'fade-in';

  private _intersectionObserver?: IntersectionObserver;

  // state of current element.
  public loaded = false;

  constructor(public _element: ElementRef) {}

  ngAfterViewInit() {
    this._intersectionObserver = new IntersectionObserver(this.checkForIntersection);
    this._intersectionObserver.observe(this._element.nativeElement as Element);
  }

  private checkForIntersection = (entries: Array<IntersectionObserverEntry>) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (this.checkIfIntersecting(entry)) {
        this.loaded = true;
        this._intersectionObserver.unobserve(<Element>this._element.nativeElement);
        this._intersectionObserver.disconnect();
      }
    });
  };

  private checkIfIntersecting(entry: IntersectionObserverEntry) {
    return (<any>entry).isIntersecting && entry.target === this._element.nativeElement;
  }
}

@Component({
  selector: 'indev-lazy-image',
  template: `
    <div>
      <img *ngIf="loaded" [src]="src" alt="TODO: temp img" />
    </div>
  `,
  styleUrls: ['./lazy-load.component.scss']
})
export class LazyLoadImage extends LazyLoadComponent {
  @Input() src: string;

  constructor(public _element: ElementRef) {
    super(_element);
  }
}
