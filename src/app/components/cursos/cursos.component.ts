import { Component } from '@angular/core';
import { Curso, CursosService } from '../../servicio/cursos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  cursos: Curso[] = [];
  constructor(private cursosService: CursosService) {
    this.cursos = this.cursosService.getCursos();
  }
}