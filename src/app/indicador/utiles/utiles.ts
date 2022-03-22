import { Indicador } from "src/app/models/Indicador";
import Constantes from "./constantes";

export default class Utiles {
  static filtrarIndicadores(indicadoresApi:any):Indicador[]{
    let indicadores:Indicador[] = [];
    
    for(let indicador in indicadoresApi){
      if(Constantes.INDICES_INVALIDOS.includes(indicador)){
        continue;
      }
      indicadores.push(indicadoresApi[indicador]);
    }

    return indicadores;
  }

  static obtenerLabels(indicador:Indicador):string[]{
    let labels:string[] = [];
    if(
      !Array.isArray(indicador.serie) ||
      indicador.serie.length < 10
    ){
      return labels;
    }
    for(let i = 0; i < 10; i++){
      labels.push(this.formatearFechaDDMMYYY(indicador.serie[i].fecha))
    }

    return labels;
  }
  static obtenerValores(indicador:Indicador):number[]{
    let valores:number[] = [];
    if(
      !Array.isArray(indicador.serie) ||
      indicador.serie.length < 10
    ){
      return valores;
    }
    for(let i = 0; i < 10; i++){
      valores.push(indicador.serie[i].valor)
    }

    return valores;
  }

  static formatearFechaDDMMYYY(fecha:Date) : string{
    let date = new Date(fecha);
    let day = (date.getDate() < 10)?`0${date.getDate()}`:date.getDate();
    let tempMonth = date.getMonth() + 1; 
    let month = (tempMonth < 10)?`0${tempMonth}`:tempMonth;
    let year = date.getFullYear();
    return(`${day}-${month}-${year}`);
  }
}