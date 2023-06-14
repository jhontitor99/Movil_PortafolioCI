import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Login1PageRoutingModule } from './login1-routing.module';

import { LoginComponent } from './login1.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    Login1PageRoutingModule
  ],
  declarations: [LoginComponent]
})
export class Login1PageModule { }
