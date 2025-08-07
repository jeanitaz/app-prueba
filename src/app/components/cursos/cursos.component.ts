import { Component } from '@angular/core';
import { Curso, CursosService } from '../../servicio/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html'
})
export class CursosComponent {
  cursos: Curso[] = [];
  constructor(private cursosService: CursosService) {
    this.cursos = this.cursosService.getCursos();
  }
}