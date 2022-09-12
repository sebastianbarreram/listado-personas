import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { LoginService } from '../services/login.service';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent implements OnInit {
  personas: Persona[] = [];

  constructor(
    private personasService: PersonasService,
    private router: Router,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    // this.personas = this.personasService.personas;
    this.personas = this.personasService.obtenerPersonas();
  }
  agregar() {
    this.router.navigate(['personas/agregar']);
  }
}
