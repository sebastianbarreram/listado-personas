import { EventEmitter, Injectable } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from './LoggingService.service';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  personas: Persona[] = [
    new Persona('Sebastian', 'Barrera'),
    new Persona('Diana', 'Marín'),
    new Persona('Humberto', 'Barrera'),
  ];
  saludar = new EventEmitter<number>();
  constructor(private logginService: LoggingService) {}

  agregarPersona(persona: Persona): void {
    this.logginService.enviarMensajePorconsola('Se agregó al arreglo');
    this.personas.push(persona);
  }

  encontrarPersona(index: number): Persona {
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona) {
    let newPersona = this.personas[index];
    newPersona.nombre = persona.nombre;
    newPersona.apellido = persona.apellido;
  }
}
