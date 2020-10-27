import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value?: string): any {
    let first = value.substr(0, 1).toUpperCase();

    return first + value.substr(1);
  }

}
