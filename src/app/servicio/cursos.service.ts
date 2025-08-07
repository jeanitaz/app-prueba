import { Injectable } from '@angular/core';

export interface Curso {
  nombre: string;
  descripcion: string;
  profesor: string;
  duracion: number;
  fechaInicio: string;
  categoria: string;
}

@Injectable({ providedIn: 'root' })
export class CursosService {
  private cursos: Curso[] = [
    { nombre: '', descripcion: '', profesor: '', duracion: 40, fechaInicio: '', categoria: '' }
  ];

  getCursos() { return this.cursos; }
  agregarCurso(curso: Curso) { this.cursos.push(curso); }
}
