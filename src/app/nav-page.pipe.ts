import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'navPage'
})
export class NavPagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
