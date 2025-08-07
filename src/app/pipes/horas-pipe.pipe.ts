import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horasPipe',
  standalone: true
})
export class HorasPipePipe implements PipeTransform {

  transform(valor: number): string {
    return valor === 1 ? '1 hora' : `${valor} horas`;
  }
}
