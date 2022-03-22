import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private headerSubject = new Subject<string>();
  headerState = this.headerSubject.asObservable();

  constructor() { }

  cambiarTitulo(titulo: string) {
    setTimeout(() => {
      this.headerSubject.next(titulo);
    })
  }
}