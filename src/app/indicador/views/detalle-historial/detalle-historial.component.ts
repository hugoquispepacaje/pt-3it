import { Component, OnInit } from '@angular/core';
import { Indicador } from 'src/app/models/Indicador';
import { IndicadoresService } from '../../services/indicadores.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit(): void {
    let codigo = this.route.snapshot.paramMap.get('codigo');
    codigo = codigo ? codigo : 'uf';
    this.cargarIndicador(codigo);
  }

  cargarIndicador(codigo:string):void {
    this.indicadoresService.getIndicador(codigo).subscribe(
      (data:any)=>{
        this.indicador = data;
        alert(this.indicador.codigo)
      }
    );
  }
}
