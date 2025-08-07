import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicio/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario:string='';
  password:string='';
  error:string='';
  constructor(private auth: AuthService, private router: Router) {}

  login=()=>{
    const sessionExitosa = this.auth.login(this.usuario, this.password)
    if(sessionExitosa){
      const redireccion = localStorage.getItem('redirectUrl') || '/cursos';
      localStorage.removeItem('redirectUrl');
      this.router.navigateByUrl(redireccion);
    }else{
      this.error='Usuario o contraseña incorrectos';
    }
  }
}
