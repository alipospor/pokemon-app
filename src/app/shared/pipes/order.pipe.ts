import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderPipe'
})
export class OrderPipe implements PipeTransform {

  transform(value?: number): string {

    if (!value) {
      return '000';
    }

    let newString = value.toString();
    let aux = '';

    for (let index = newString.length; index < 3; index++) {

      aux += '0';
    }

    newString = aux + newString;

    return newString;
  }

}
