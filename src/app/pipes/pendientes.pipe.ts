import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../clases/index';


@Pipe({
  name: 'pendientes',
  pure: false
})
export class PendientesPipe implements PipeTransform {
  transform(listas: Lista[], estado: boolean = false): Lista[] {
    let nuevaLista: Lista[] = [];

    for (const lista of listas) {
      if(lista.terminada == estado) {
        nuevaLista.push(lista);
      }
    }
    return nuevaLista;
  }
}