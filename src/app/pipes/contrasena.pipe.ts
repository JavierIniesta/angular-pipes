import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar = true): string {
    if (activar) {
      return '*'.repeat(value.length);
    } else {
      return value;
    }
  }

}
