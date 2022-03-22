import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {
  urlApi:string = environment.urlApi;
  constructor(
    private http: HttpClient
  ) { }

  getIndicadores() {
    return this.http.get<any>(this.urlApi);
  }

  getIndicador(codigo:string) {
    return this.http.get<any>(`${this.urlApi}/${codigo}/2022`);
  }
  
}
