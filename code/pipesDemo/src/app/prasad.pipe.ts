import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prasad',
  standalone: false
})
export class PrasadPipe implements PipeTransform {

  transform(value: string, n:boolean): number {
    if (n == false) {
        return 0
    }
    else {
      return value.length;
    } 
  }

}
