import {
  Component,
  ViewEncapsulation,
  Input,
  ElementRef,
  ViewChild,
  OnInit,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'indev-header',
  template: `
    <header class="feature" [ngStyle]="style">
      <div class="container">
        <div [ngClass]="['feature--container', className]">
          <div class="feature--subHeader TextTheme--title" #subHeader>
            <ng-content select="h2"></ng-content>
          </div>
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
  constructor() {}

  @Input() style: Object = {};

  className: string = '';

  @ViewChild('image') imageRef: ElementRef<HTMLElement>;
  @ViewChild('markdown') markdownRef: ElementRef<HTMLElement>;
  @ViewChild('subHeader') subHeaderRef: ElementRef<HTMLElement>;
  @ViewChild('header') headerRef: ElementRef<HTMLElement>;

  ngOnInit() {}

  ngAfterContentInit(): void {
    const imageEl = this.imageRef.nativeElement as HTMLElement;
    const markdownEl = this.markdownRef.nativeElement as HTMLElement;
    const subHeaderEl = this.subHeaderRef.nativeElement as HTMLElement;

    this.className = 'header';

    if (subHeaderEl.hasChildNodes()) this.className += '-subHeader';
    else {
      subHeaderEl.style.display = 'none';
    }

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
