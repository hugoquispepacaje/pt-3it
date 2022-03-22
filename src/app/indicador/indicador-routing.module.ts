import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleEspecificoComponent } from './views/detalle-especifico/detalle-especifico.component';
import { DetalleHistorialComponent } from './views/detalle-historial/detalle-historial.component';
import { MainComponent } from './views/main/main.component';

const indicadoresRoutes: Routes = [
  { path: 'inicio',  component: MainComponent },
  { path: 'detalle-especifico/:codigo',  component: DetalleEspecificoComponent },
  { path: 'detalle-historial/:codigo', component: DetalleHistorialComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(indicadoresRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class IndicadoresRoutingModule { }