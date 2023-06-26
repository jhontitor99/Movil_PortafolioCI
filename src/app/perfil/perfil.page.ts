import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Perfil {
  usuario: any;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],

})
export class PerfilPage implements OnInit {
  perfil: Perfil;
  email: string;

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.authService.getEmail().subscribe(
      (email) => {
        this.email = email;
        console.log(email);
        this.obtenerPerfil();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtenerPerfil() {
    const apiUrl = 'http://localhost/PortafolioCI/PerfilSocio';
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const body = new URLSearchParams();
    body.set('email', this.email);

    this.http.post<Perfil>(apiUrl, body.toString(), { headers })
      .subscribe(
        (response) => {
          this.perfil = response;
          console.log(this.perfil);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  volver() {
    window.location.href = '/dashboard';
  }
}
