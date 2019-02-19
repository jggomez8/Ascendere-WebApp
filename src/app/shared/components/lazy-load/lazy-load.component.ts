import { Component, Input, ElementRef, AfterViewInit, OnInit } from '@angular/core';

// Animation when component appears
const TRANSITIONS = ['fade-in', 'translate'];

@Component({
  selector: 'indev-lazy-transition',
  exportAs: 'LazyTransitionComponent',
  template: `
    <div class="lazy-load">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./lazy-load.component.scss']
})
export class LazyTransitionComponent implements OnInit, AfterViewInit {
  // Transition elements will use when loaded
  @Input() transition: string;

  private _intersectionObserver?: IntersectionObserver;

  // state of current element.
  public loaded = false;

  constructor(public _element: ElementRef) {}

  ngOnInit(): void {
    // set transition if included or define to defaukt transition
    this.transition = TRANSITIONS.includes(this.transition) ? this.transition : 'fade-in';
    this._intersectionObserver = new IntersectionObserver(this.checkForIntersection);
    this._intersectionObserver.observe(this._element.nativeElement as Element);
  }

  ngAfterViewInit() {}

  private checkForIntersection = (entries: Array<IntersectionObserverEntry>) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        console.log('touch');

        // if (this.checkIfIntersecting(entry)) {
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
  exportAs: 'LazyImageComponent',
  template: `
    <div class="lazy-container" [ngClass]="{ fade: loaded }">
      <img *ngIf="loaded" [src]="dataSource" alt="TODO: temp img" />
    </div>
  `,
  styleUrls: ['./lazy-load.component.scss']
})
export class LazyLoadImage extends LazyTransitionComponent {
  @Input() dataSource: string;

  constructor(public _element: ElementRef) {
    super(_element);
  }

  get src() {
    if (this.loaded) return this.dataSource;
    return '';
  }
}
