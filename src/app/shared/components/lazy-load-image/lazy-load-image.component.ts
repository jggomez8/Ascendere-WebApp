import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'indev-lazy-load-image',
  template: `
    <img #ImageRef />
  `
})
export class LazyLoadImageComponent implements OnInit {
  // Data for images
  @Input() source: {
    lowRes: string;
    highRes: string;
  };

  /**
   *
   */
  @ViewChild('ImageRef') imageRef: ElementRef;

  /**
   *  Know when this image should start loading high resolution image
   */
  private _intersectionObserver?: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this._intersectionObserver = new IntersectionObserver(this.checkForIntersection);
    this._intersectionObserver.observe(this.el.nativeElement as HTMLElement);
  }

  private checkForIntersection = (entries: Array<IntersectionObserverEntry>) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (this.checkIfIntersecting(entry)) {
        console.log('start loading');
        (this.imageRef.nativeElement as HTMLImageElement).setAttribute('src', this.source.lowRes);
        (this.imageRef.nativeElement as HTMLImageElement).onload = () => {
          console.log('Loading high res');
          (this.imageRef.nativeElement as HTMLImageElement).setAttribute(
            'src',
            this.source.highRes
          );

        };

        this._intersectionObserver.unobserve(<Element>this.el.nativeElement);
        this._intersectionObserver.disconnect();
      }
    });
  };

  private checkIfIntersecting(entry: IntersectionObserverEntry) {
    return (<any>entry).isIntersecting && entry.target === this.el.nativeElement;
  }
}
