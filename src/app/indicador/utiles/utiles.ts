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
}