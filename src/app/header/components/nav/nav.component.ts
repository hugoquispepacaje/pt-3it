import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() isMainView: boolean = true;
  titulo:string = 'tituloooo';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    
  }
  
}
