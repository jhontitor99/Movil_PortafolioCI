import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardComponent implements OnInit {
  estadisticas: { masculinos: any[], femeninos: any[] } = { masculinos: [], femeninos: [] };
  constructor(private http: HttpClient) { }

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

        window.location.href = '/login';
      },
      (error) => {
        // Manejar el error si ocurre algún problema con la solicitud
        console.error('Error al cerrar sesión:', error);
      }
    );
  }
}
