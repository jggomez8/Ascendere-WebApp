import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NotAuthenticatedGuard } from './shared/providers/not-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: './views/scaffold/scaffold.module#ScaffoldModule'
      },
      {
        path: 'ascendere',
        loadChildren: './modules/ascendere/ascendere.module#AscendereModule'
      },
      {
        path: 'login',
        loadChildren: './modules/login/login.module#LoginModule',
        canLoad: [NotAuthenticatedGuard]
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      paramsInheritanceStrategy: 'always'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
