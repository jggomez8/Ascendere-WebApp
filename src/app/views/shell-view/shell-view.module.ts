import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellViewComponent } from './shell-view.component';
import { ShellViewRoutingModule } from './sheell-view.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ShellViewComponent],
  imports: [CommonModule, ShellViewRoutingModule, SharedModule]
})
export class ShellViewModule {}
