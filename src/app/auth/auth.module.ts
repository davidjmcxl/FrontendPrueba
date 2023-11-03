import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutAuthComponent } from './layout-auth/layout-auth.component';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './layout-auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutAuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
  ,exports:[LayoutAuthComponent]
})
export class AuthModule { }
