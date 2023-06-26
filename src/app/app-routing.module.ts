import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login1/login1.page';
import { DashboardComponent } from './dashboard/dashboard.page';
import { PerfilPage } from './perfil/perfil.page';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'perfil', component: PerfilPage, canActivate: [AuthGuard] },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  // },
  // {
  //   path: 'perfil',
  //   loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
