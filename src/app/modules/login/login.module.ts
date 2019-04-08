import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { LoginRoutingModule } from './login.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, LoginRoutingModule, SharedModule]
})
export class LoginModule {}
