import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
nombre: string = '';
  email: string = '';
  password: string = '';
  err: string = '';

  constructor(private http: HttpClient) { }

  registrarUsuario() {
    const nuevoUsuario = {
      nombre: this.nombre,
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:3000/users', nuevoUsuario)
      .subscribe({
        next: () => {
          alert('Usuario registrado correctamente');
        },
        error: (err) => {
          console.error('Error al registrar', err);
        }
      });
  }
}
