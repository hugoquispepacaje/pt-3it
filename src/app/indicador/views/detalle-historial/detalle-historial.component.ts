import { Component, OnInit } from '@angular/core';
import { Indicador } from 'src/app/models/Indicador';
import { IndicadoresService } from '../../services/indicadores.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HeaderService } from 'src/app/header/header.service';
import { AlertasService } from 'src/app/services/alertas.service';
@Component({
  selector: 'app-detalle-historial',
  templateUrl: './detalle-historial.component.html',
  styleUrls: ['./detalle-historial.component.css']
})
export class DetalleHistorialComponent implements OnInit {

  indicador:Indicador = {};

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
        this.headerService.cambiarTitulo(
          this.indicador.nombre?this.indicador.nombre:''
        );
        this.alertasService.cerrarAlerta();
      }
    );
  }
}
