import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RegisterCardComponent } from './components/register-card/register-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginPageComponent,
    LoginCardComponent,
    RegisterPageComponent,
    RegisterCardComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
