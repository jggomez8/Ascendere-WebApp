import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyViewComponent } from './empty-view.component';

const routes: Routes = [
  {
    path: '',
    component: EmptyViewComponent,
    children: [
      {
        path: 'ascendere',
        loadChildren: '../../modules/ascendere/ascendere.module#AscendereModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmptyViewRoutingModule {}
