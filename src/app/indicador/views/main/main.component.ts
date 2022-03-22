import { Component, OnInit } from '@angular/core';
import { Indicador } from 'src/app/models/Indicador';
import { IndicadoresService } from '../../services/indicadores.service';
import Utiles from '../../utiles/utiles';
import { HeaderService } from 'src/app/header/header.service';
import { AlertasService } from 'src/app/services/alertas.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  indicadores:Indicador[] = [];
  constructor(
    private indicadoresService:IndicadoresService,
    private headerService:HeaderService,
    private alertasService:AlertasService
  ) { }

  ngOnInit(): void {
    this.cargarIndicadores();
    this.headerService.cambiarTitulo('Indicadores');
  }

  cargarIndicadores():void {
    this.alertasService.loading();
    this.indicadoresService.getIndicadores().subscribe(
      (data:any)=>{
        this.indicadores = Utiles.filtrarIndicadores(data);
        this.alertasService.cerrarAlerta();
      }
    );
  }

}
