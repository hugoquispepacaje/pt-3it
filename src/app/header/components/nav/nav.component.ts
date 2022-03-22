import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from '../../header.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() isMainView: boolean = true;
  private subscription: Subscription = new Subscription();
  titulo:string = 'tituloooo';

  constructor(
    private headerService:HeaderService
  ) { 
    this.subscription = this.headerService.headerState.subscribe(
      (titulo: string) => {
        this.cambiarTitulo(titulo);
      }
    );
  }

  ngOnInit(): void {
    
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  cambiarTitulo(titulo:string){
    this.titulo = titulo;
    this.isMainView = titulo === 'Indicadores';
  }
}
