import { EventEmitter, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Persona } from '../persona.model';
import { DataService } from './data.service';
import { LoggingService } from './LoggingService.service';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  // personas: Persona[] = [
  //   new Persona('Sebastian', 'Barrera'),
  //   new Persona('Diana', 'Marín'),
  //   new Persona('Humberto', 'Barrera'),
  // ];
  personas: Persona[] = [];
  indices: string[] = [];
  saludar = new EventEmitter<number>();
  constructor(
    private logginService: LoggingService,
    private dataService: DataService
  ) {}

  obtenerPersonas(): Persona[] {
    this.dataService
      .obtenerPersonas()
      .snapshotChanges()
      .subscribe(
        (res) => {
          res.map((e: any) => {
            const data = e.payload.doc.data();
            // console.log(e.payload.doc.id);
            // console.log(e.payload.doc.data());
            this.personas.push(data);
            this.indices.push(e.payload.doc.id);
            return data;
          });
        },
        (err) => {
          alert('Error al obtener personas');
        }
      );
    console.log(this.personas);
    console.log(this.indices);
    this.personas = [];
    return this.personas;
    // console.log(this.personas);
  }

  agregarPersona(persona: Persona): void {
    this.logginService.enviarMensajePorconsola('Se agregó al arreglo');
    this.personas.push(persona);
    this.dataService.guardarPersona(persona);
    this.obtenerPersonas();
  }

  encontrarPersona(index: number): Persona {
    let persona: Persona = this.personas[index];
    return persona;
  }

  modificarPersona(index: number, persona: Persona) {
    let newPersona = this.personas[index];
    newPersona.nombre = persona.nombre;
    newPersona.apellido = persona.apellido;
    this.dataService.actualizarPersona(
      this.indices[index],
      this.personas[index]
    );
    this.obtenerPersonas();
  }

  eliminarPersona(index: number) {
    this.personas.splice(index, 1);
    this.indices.splice(index, 1);
    this.dataService.eliminarPersona(this.indices[index], this.personas[index]);
    this.obtenerPersonas();
  }
}
