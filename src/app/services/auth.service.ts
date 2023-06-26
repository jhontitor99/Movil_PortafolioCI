import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated: boolean = false;
  private apiUrl = 'http://localhost/PortafolioCI/Home/validarIngresoMovil';
  private email: string;

  constructor(private http: HttpClient) {
    this.email = localStorage.getItem('email');
    this.isAuthenticated = this.checkAuthenticationStatus();
  }

  setEmail(email: string) {
    this.email = email;
    localStorage.setItem('email', email);
  }

  getEmail(): Observable<string> {
    console.log('Email:', this.email);
    return of(this.email);
  }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);

    return this.http.post(this.apiUrl, body.toString(), { headers })
      .pipe(
        tap(() => {
          this.setEmail(email);
          this.isAuthenticated = true;
        })
      );
  }



  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  private checkAuthenticationStatus(): boolean {

    this.isAuthenticated = !!this.email;

    return this.isAuthenticated;
  }
}
