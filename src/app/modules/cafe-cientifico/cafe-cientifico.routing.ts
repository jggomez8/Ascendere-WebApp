import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CafeCientificoComponent } from './pages/cafe-cientifico/cafe-cientifico.component';

const routes: Routes = [
  {
    path: '',
    component: CafeCientificoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeCientificoRoutingModule {}
