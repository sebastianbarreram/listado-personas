import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  newPersona: Persona = new Persona('', '');
  nombreInput: string = '';
  apellidoInput: string = '';
  index: number | undefined;

  constructor(
    private personasService: PersonasService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.personasService.saludar.subscribe((indice: number) =>
      alert('El índice es: ' + indice)
    );
  }
  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    if (this.index != undefined) {
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona(): void {
    this.newPersona = new Persona(this.nombreInput, this.apellidoInput);
    if (this.index != undefined) {
      this.personasService.modificarPersona(this.index, this.newPersona);
    } else {
      this.personasService.agregarPersona(this.newPersona);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona() {
    if (this.index != undefined) {
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(['personas']);
  }
}
