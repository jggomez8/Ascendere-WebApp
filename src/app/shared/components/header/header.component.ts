import {
  Component,
  ViewEncapsulation,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnInit,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'indev-header',
  template: `
    <header class="feature" [ngStyle]="style">
      <div class="container">
        <div class="feature--container" [ngClass]="['feature--container', className]">
          <div class="feature--header TextTheme--display2" #header>
            <ng-content select="h1"></ng-content>
          </div>
          <div class="feature--image" #image>
            <ng-content select="img"></ng-content>
          </div>
          <div class="feature--markdown" #markdown>
            <ng-content select="markdown"></ng-content>
          </div>
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, AfterContentInit {
  @Input() style: Object = {};

  className: string = '';

  @ViewChild('image') imageRef: ElementRef;
  @ViewChild('markdown') markdownRef: ElementRef;

  ngOnInit() {
    // TODO: add metatag
  }

  ngAfterContentInit(): void {
    const imageEl = this.imageRef.nativeElement as HTMLElement;
    const markdownEl = this.markdownRef.nativeElement as HTMLElement;

    this.className = 'header';

    if (imageEl.hasChildNodes()) this.className += '-image';
    else {
      imageEl.style.display = 'none';
    }

    if (markdownEl.hasChildNodes()) this.className += '-markdown';
    else {
      markdownEl.style.display = 'none';
    }
  }
}
