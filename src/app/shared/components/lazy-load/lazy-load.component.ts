import { Component, Input, ElementRef, AfterViewInit, OnInit } from '@angular/core';

// Animation when component appears
const TRANSITIONS = ['fade-in', 'translate'];

@Component({
  selector: 'indev-lazy-transition',
  exportAs: 'LazyTransitionComponent',
  template: `
    <div class="lazy-load">
      <ng-content *ngIf="loaded"></ng-content>
    </div>
  `,
  styleUrls: ['./lazy-load.component.scss']
})
export class LazyTransitionComponent implements OnInit,  AfterViewInit {
  // Transition elements will use when loaded
  @Input() transition: string;

  private _intersectionObserver?: IntersectionObserver;

  // state of current element.
  public loaded = false;

  constructor(public _element: ElementRef) { }

  ngOnInit(): void {
    // set transition if included or define to defaukt transition
    this.transition = TRANSITIONS.includes(this.transition) ? this.transition : 'fade-in'
      ;
  }

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
  exportAs: 'LazyImageComponent',
  template: `
      <img *ngIf="loaded" [src]="src" alt="TODO: temp img" />
  `,
  styleUrls: ['./lazy-load.component.scss']
})
export class LazyLoadImage extends LazyTransitionComponent {
  @Input() src: string;

  constructor(public _element: ElementRef) {
    super(_element);
  }
}
