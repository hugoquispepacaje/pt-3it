import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './views/main/main.component';
import { DetalleHistorialComponent } from './views/detalle-historial/detalle-historial.component';
import { DetalleEspecificoComponent } from './views/detalle-especifico/detalle-especifico.component';
import { IndicadoresRoutingModule } from './indicador-routing.module';


@NgModule({
  declarations: [
    MainComponent,
    DetalleHistorialComponent,
    DetalleEspecificoComponent,
  ],
  imports: [
    CommonModule,
    IndicadoresRoutingModule
  ]
})
export class IndicadorModule { }
