import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Listado de Personas';
  constructor(public loginService: LoginService) {}
  estaAutenticado():boolean {
    return this.loginService.estaAutenticado();
  }
}
