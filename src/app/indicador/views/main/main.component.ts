import { Component, OnInit } from '@angular/core';
import { Indicador } from 'src/app/models/Indicador';
import { IndicadoresService } from '../../services/indicadores.service';
import Utiles from '../../utiles/utiles';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  indicadores:Indicador[] = [];
  constructor(
    private indicadoresService:IndicadoresService
  ) { }

  ngOnInit(): void {
    this.cargarIndicadores();
  }

  cargarIndicadores():void {
    this.indicadoresService.getIndicadores().subscribe(
      (data:any)=>{
        this.indicadores = Utiles.filtrarIndicadores(data);
      }
    );
  }

}
