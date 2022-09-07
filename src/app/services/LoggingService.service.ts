import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
export class LoggingService {
  enviarMensajePorconsola(mensaje: string): void {
    console.log(mensaje);
  }
}
