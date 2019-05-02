import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signIn'
  },
  {
    path: 'signIn',
    component: SignInComponent
  },
  {
    path: 'signUp',
    redirectTo: '/login/signIn'
    // component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
