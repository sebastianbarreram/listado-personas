import { Injectable } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from './LoggingService.service';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  personas: Persona[] = [
    new Persona('Sebastian', 'Barrera'),
    new Persona('Diana', 'Marín'),
    new Persona('Humberto', 'Barrera'),
  ];
  constructor(private logginService: LoggingService) { }
  
  agregarPersona(persona: Persona): void {
    this.logginService.enviarMensajePorconsola('Se agregó al arreglo');
    this.personas.push(persona);
  }
}
