import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptyViewRoutingModule } from './empty-view.routing';
import { EmptyViewComponent } from './empty-view.component';

@NgModule({
  declarations: [EmptyViewComponent],
  imports: [
    CommonModule,
    EmptyViewRoutingModule
  ]
})
export class EmptyViewModule { }
