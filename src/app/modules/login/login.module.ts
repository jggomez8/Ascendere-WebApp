import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { LoginRoutingModule } from './login.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [CommonModule, LoginRoutingModule, SharedModule]
})
export class LoginModule {}
