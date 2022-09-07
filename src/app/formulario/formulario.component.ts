import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../services/LoggingService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  // providers: [LoggingService],
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();
  @ViewChild('nombreInput') nombre: ElementRef = {} as ElementRef;
  @ViewChild('apellidoInput') apellido: ElementRef = {} as ElementRef;
  newPersona: Persona = new Persona('', '');

  constructor(private logginService: LoggingService) {}

  agregarPersona(): void {
    if (
      this.nombre.nativeElement.value != '' &&
      this.apellido.nativeElement.value != ''
    )
      this.newPersona = new Persona(
        this.nombre.nativeElement.value,
        this.apellido.nativeElement.value
      );
    this.logginService.enviarMensajePorconsola(
      'Enviamos persona con nombre: ' +
        this.newPersona.nombre +
        ' apellido: ' +
        this.newPersona.apellido
    );
    this.personaCreada.emit(this.newPersona);
  }
}
