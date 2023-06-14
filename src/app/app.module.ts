import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Login1PageModule } from './login1/login1.module';
import { DashboardPageModule } from './dashboard/dashboard.module';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAuth, getAuth } from '@angular/fire/auth';
@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, ReactiveFormsModule, FormsModule, BrowserModule, IonicModule.forRoot(), Login1PageModule, DashboardPageModule, AppRoutingModule, provideAuth(() => getAuth())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }]

  ,
  bootstrap: [AppComponent],
})
export class AppModule { }
