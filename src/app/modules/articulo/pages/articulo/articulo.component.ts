import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'indev-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;

// TODO: validate if file extension is required to load asset from server
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);

      // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  get markdown_source(): string {
    return `/assets/markdown/articulos/${this.id}.md`;
  }

  onLoad($event) {
    // TODO: remove
    console.log($event);
  }

  onError($event) {
    // TODO: remove
    console.log($event);
  }
}
