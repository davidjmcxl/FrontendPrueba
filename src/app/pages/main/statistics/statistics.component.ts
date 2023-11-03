import { Component, inject, OnInit } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';
import { Venta } from '../../models/statistic.inteface';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  public statistics: any[] = [];
  private statisticsService = inject(StatisticsService);
  displayedColumns: string[] = ['mes', 'cantidadtotal', 'total'];
  dataSource: Venta[] = [];
  ngOnInit(): void {
    this.statisticsService.getStatistics().subscribe((statistic) => {
      this.dataSource = statistic.ventas;
    });
  }
}
