import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MaterialModule } from '../material/material.module';
import { StatisticsComponent } from './main/statistics/statistics.component';
import { HeaderComponent} from './components/header/header.component';
import { FormProjectComponent } from './components/form-project/form-project.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    LoadingComponent,
    HomeComponent,
    HeaderComponent,
    StatisticsComponent,
    FormProjectComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
