import { Component, ElementRef, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../services/LoggingService.service';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @ViewChild('nombreInput') nombre: ElementRef = {} as ElementRef;
  @ViewChild('apellidoInput') apellido: ElementRef = {} as ElementRef;
  newPersona: Persona = new Persona('', '');

  constructor(
    private logginService: LoggingService,
    private personasService: PersonasService
  ) {
    this.personasService.saludar.subscribe((indice: number) =>
      alert('El índice es: ' + indice)
    );
  }

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
    this.personasService.agregarPersona(this.newPersona);
  }
}
