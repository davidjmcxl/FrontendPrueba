import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { StatisticsComponent } from './main/statistics/statistics.component';

const routes: Routes = [
  { path: '', component: MainComponent
  ,children:[
    {
      path:'', component: HomeComponent
    },{
      path:'estadisticas', component: StatisticsComponent
    }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
