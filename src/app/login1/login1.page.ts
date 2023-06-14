import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login1',
  templateUrl: 'login1.page.html',
  styleUrls: ['login1.page.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  //Alerta
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Aceptar']
    });

    await alert.present();
  }


  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.authService.login(email, password).subscribe(
        (response) => {
          if (response.status === 'success') {
            // Redirigir al dashboard
            this.router.navigate(['/dashboard']);
          } else {
            this.presentAlert('Error de inicio de sesión', 'Ocurrió un error al iniciar sesión.');

          }
        },
        (error) => {

          console.error(error);
        }
      );
    } else {
      this.presentAlert('Error de inicio de sesión', 'Ocurrió un error al iniciar sesión.');
    }
  }
}
