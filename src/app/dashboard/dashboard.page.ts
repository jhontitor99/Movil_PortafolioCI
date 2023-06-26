import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardComponent implements OnInit {
  estadisticas: { masculinos: any[], femeninos: any[] } = { masculinos: [], femeninos: [] };
  isAuthenticated: boolean;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.obtenerReporteEstadisticas();
  }

  obtenerReporteEstadisticas(): void {
    this.http.get<any[]>('http://localhost:80/PortafolioCI/ReporteEstadisticasMovil').subscribe(
      (response: any) => {
        this.estadisticas.masculinos = response.masculinos;
        this.estadisticas.femeninos = response.femeninos;
      },
      error => {
        console.log('Error al obtener el reporte de estadísticas', error);
      }
    );
  }

  logout() {
    this.http.get('http://localhost:80/PortafolioCI/logoutM', {}).subscribe(
      (response) => {
        localStorage.removeItem('email');
        this.isAuthenticated = false;
        window.location.href = '/login';
      },
      (error) => {
        // Manejar el error si ocurre algún problema con la solicitud
        console.error('Error al cerrar sesión:', error);
      }
    );
  }
  perfil() {
    this.router.navigate(['/perfil']);

  }
}
