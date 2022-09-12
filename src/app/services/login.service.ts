import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  token: string = '';
  constructor(public afAuth: AngularFireAuth, private router: Router) {}
  login(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        result.user?.getIdToken().then((token) => {
          this.token = token;
        });
        this.router.navigate(['/']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  getIdToken() {
    return this.token;
  }
  SignOut() {
    return this.afAuth.signOut().then(() => {
      window.alert('se ha cerrado la sesión');
      this.token = "";
      this.router.navigate(['login']);
    });
  }
  estaAutenticado() {
    return this.token != "";
  }
}
