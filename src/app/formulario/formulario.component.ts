import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  nombreInput: string = '';
  apellidoInput: string = '';

  @Output() personaCreada = new EventEmitter<Persona>();

  agregarPersona(): void {
    if (this.nombreInput != '' && this.apellidoInput != '')
      //this.personas.push(new Persona(this.nombreInput, this.apellidoInput));
      this.personaCreada.emit(
        new Persona(this.nombreInput, this.apellidoInput)
      );
  }
}
