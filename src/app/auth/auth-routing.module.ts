import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAuthComponent } from './layout-auth/layout-auth.component';
import { LoginComponent } from './layout-auth/login/login.component';

const routes: Routes = [
  { path: '', component: LayoutAuthComponent
,children:[
  {
    path:'', component: LoginComponent
  }
] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
