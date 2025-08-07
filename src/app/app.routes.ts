import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { authGuard } from './guards/auth.guard';
import { RegistroComponent } from './components/registro/registro.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'cursos', component: CursosComponent, canActivate: [authGuard] },
  { path: 'crear', component: CrearCursoComponent, canActivate: [authGuard] }
];