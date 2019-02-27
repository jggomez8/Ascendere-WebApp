import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'indev-lazy-load-image',
  template: `
    <img #ImageRef class="blur" />
  `,
  styles: [
    `
      img {
        width: 100%;
        transition: all 1.5s ease-in-out;
        overflow: hidden;
        object-fit: cover;
      }
      .blur {
        -webkit-filter: blur(20px); /* Safari 6.0 - 9.0 */
        filter: blur(20px);
      }
    `
  ]
})
export class LazyLoadImageComponent implements OnInit {
  /**
   * Array of images different resolutions, so images can have various resolution.
   * Also images are sorted from low resolution to high resolution
   */
  @Input() source: string[];

  /**
   * Position of current image loaded from array `source`
   */
  index: number = 0;

  /**
   * Reference to image element where source will be loaded depending on image loading state
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
      // When image is on viewport start loading low rez image
      if (this.checkIfIntersecting(entry)) {
        // load image data for the first time
        this.loadImageSrc();

        // when this image loaded low res image, change to
        (this.imageRef.nativeElement as HTMLImageElement).onload = this.loadImageSrc;

        // stop observing this element
        this._intersectionObserver.unobserve(<Element>this.el.nativeElement);
        this._intersectionObserver.disconnect();
      }
    });
  };

  private loadImageSrc = () => {
    let imageEl = this.imageRef.nativeElement as HTMLImageElement;

    // validate index to break loop
    if (this.index >= this.source.length - 1) {
      imageEl.onload = null;
      imageEl.classList.remove('blur');
    }

    imageEl.setAttribute('src', this.source[this.index++]);
  };

  private checkIfIntersecting(entry: IntersectionObserverEntry) {
    return (<any>entry).isIntersecting && entry.target === this.el.nativeElement;
  }
}
