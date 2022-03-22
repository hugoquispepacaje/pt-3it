export interface Indicador {
  codigo?: string;
  nombre?: string;
  unidad_medida?: string;
  fecha?: Date;
  valor?: number;
  serie?: Historial[]
}

interface Historial {
  fecha?: Date,
  valor?: number
}