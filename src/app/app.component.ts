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
  nombreInput: string = '';
  apellidoInput: string = '';

  agregarPersona(): void {
    if (this.nombreInput != '' && this.apellidoInput != '')
      this.personas.push(new Persona(this.nombreInput, this.apellidoInput));
  }
}
