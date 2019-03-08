import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VitaminaIComponent } from './pages/vitamina-i/vitamina-i.component';

const routes: Routes = [
  {
    path : '',
    component: VitaminaIComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VitaminaIRoutingModule { }
