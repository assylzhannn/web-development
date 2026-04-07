import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tenge',
  standalone: true
})
export class TengePipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === undefined) return '';
    return value.toLocaleString('kk-KZ') + ' ₸';
  }
}