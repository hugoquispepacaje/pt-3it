import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Indicador } from 'src/app/models/Indicador';
import Utiles from '../../utiles/utiles';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  mostrarChart:boolean = false;
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  
  constructor() { }

  ngOnInit(): void {
  }

  inicializarChart(indicador:Indicador):void{
    this.lineChartData.labels = Utiles.obtenerLabels(indicador);
    if(this.lineChartData.labels.length < 10){
      this.mostrarChart = false;
      return;
    }
    this.lineChartData.datasets[0].data = Utiles.obtenerValores(indicador);
    this.lineChartData.datasets[0].label = indicador.codigo;
    this.mostrarChart = true;
  }
}
