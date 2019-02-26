import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellViewComponent } from './shell-view.component';

const routes: Routes = [
  {
    path: '',
    component: ShellViewComponent,
    children: [
      {
        path: '',
        loadChildren: '../../modules/home/home.module#HomeModule'
      },
      {
        path: 'programa-formacion',
        loadChildren: '../../modules/programa-formacion/programa-formacion.module#ProgramaFormacionModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellViewRoutingModule {}
