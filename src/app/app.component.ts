import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Listado de Personas';
  personas: Persona[] = [
    new Persona('Sebastian', 'Barrera'),
    new Persona('Diana', 'Marín'),
    new Persona('Humberto', 'Barrera'),
  ];
  personaAgregada(persona: Persona): void {
    this.personas.push(persona);
  }
}
