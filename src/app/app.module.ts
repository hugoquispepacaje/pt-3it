import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { IndicadorModule } from './indicador/indicador.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    HttpClientModule,
    AppRoutingModule,
    IndicadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
