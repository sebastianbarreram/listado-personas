import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();
  @ViewChild('nombreInput') nombre: ElementRef = {} as ElementRef;
  @ViewChild('apellidoInput') apellido: ElementRef = {} as ElementRef;

  agregarPersona(): void {
    if (this.nombre.nativeElement.value != '' && this.apellido.nativeElement.value != '')
      this.personaCreada.emit(
        new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value)
      );
  }
}
