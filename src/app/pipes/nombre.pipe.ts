import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombre',
  standalone: true
})
export class NombrePipe implements PipeTransform {

  transform(valor:string): string {
    if(!valor) return '';

    return 'Curso: ' + valor.toUpperCase();

  }

}
