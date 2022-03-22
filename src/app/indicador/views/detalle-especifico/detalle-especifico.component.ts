import { Component, OnInit, ViewChild } from '@angular/core';
import { Indicador } from 'src/app/models/Indicador';
import { IndicadoresService } from '../../services/indicadores.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ChartComponent } from '../../components/chart/chart.component';
import { HeaderService } from 'src/app/header/header.service';
import { AlertasService } from 'src/app/services/alertas.service';

@Component({
  selector: 'app-detalle-especifico',
  templateUrl: './detalle-especifico.component.html',
  styleUrls: ['./detalle-especifico.component.css']
})
export class DetalleEspecificoComponent implements OnInit {

  @ViewChild(ChartComponent) chart?: ChartComponent;
  indicador:Indicador = {};
  fecha:Date = new Date();
  valor:number = 0;
  constructor(
    private indicadoresService:IndicadoresService,
    private route: ActivatedRoute,
    private headerService:HeaderService,
    private alertasService:AlertasService
  ) { }

  ngOnInit(): void {
    let codigo = this.route.snapshot.paramMap.get('codigo');
    codigo = codigo ? codigo : 'uf';
    this.cargarIndicador(codigo);
  }

  cargarIndicador(codigo:string):void {
    this.alertasService.loading();
    this.indicadoresService.getIndicador(codigo).subscribe(
      (data:any)=>{
        this.indicador = data;
        if(
          Array.isArray(this.indicador.serie) && 
          this.indicador.serie.length > 1
        )
        {
          this.valor = 
            this.indicador.serie?
            this.indicador.serie[0].valor:
            0;
          this.fecha = 
            this.indicador.serie?
            this.indicador.serie[0].fecha:
            new Date();
          this.chart?.inicializarChart(this.indicador);
        }
          this.headerService.cambiarTitulo(
            this.indicador.nombre?this.indicador.nombre:''
          );
        this.alertasService.cerrarAlerta();
      }
    );
  }

  
}
