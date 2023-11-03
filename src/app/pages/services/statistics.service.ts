import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Projects } from '../models/project.interface';
import { Statistic } from '../models/statistic.inteface';
const baseUrl=environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private http=inject(HttpClient);
  getStatistics(){
    const url=`${baseUrl}/api/v1/ventas/estadisticas`;
      return this.http.get<Statistic>(url);
  }

}
