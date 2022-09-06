import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  // nombreInput: string = '';
  // apellidoInput: string = '';

  @Output() personaCreada = new EventEmitter<Persona>();

  agregarPersona(
    nombreInput: HTMLInputElement,
    apellidoInput: HTMLInputElement
  ): void {
    if (nombreInput.value != '' && apellidoInput.value != '')
      this.personaCreada.emit(
        new Persona(nombreInput.value, apellidoInput.value)
      );
  }
}
