import { Component } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './services/LoggingService.service';

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

  constructor(private logginService: LoggingService) {}

  personaAgregada(persona: Persona): void {
    this.logginService.enviarMensajePorconsola('Se agregó al arreglo');
    this.personas.push(persona);
  }
}
