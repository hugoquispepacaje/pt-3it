import { animate } from '@angular/animations';
import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor() { }

  loading() {
    swal.fire({
      title: 'Cargando...',
      allowOutsideClick: false,//Evitar cerrar el modal clikeando afuera
      allowEscapeKey: false, // Evita cerrar el modal con el "esc"
      didOpen: () => {
        swal.showLoading()
      }
    });
  }

  cerrarAlerta() {
    swal.close();
  }
}
