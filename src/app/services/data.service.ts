import { Injectable } from '@angular/core';
import { Persona } from '../persona.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dbPath = '/personas';
  personasColollection: AngularFirestoreCollection<Persona>;
  constructor(private angularFirestore: AngularFirestore) {
    this.personasColollection = angularFirestore.collection(this.dbPath);
  }

  guardarPersona(persona: Persona): any {
    return this.personasColollection.add({ ...persona });
  }

  obtenerPersonas(): AngularFirestoreCollection<Persona> {
    return this.angularFirestore.collection('/personas');
  }

  eliminarPersona(id: string, persona: Persona) {
    if (
      window.confirm(
        '¿Seguro que quiere eliminar a ' +
          persona.nombre +
          ' ' +
          persona.apellido +
          '?'
      )
    ) {
      this.personasColollection.doc(id).delete();
    }
  }

  actualizarPersona(id: string, persona: Persona) {
    return this.personasColollection.doc(id).update(persona);
  }
}
