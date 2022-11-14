import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCell'
})
export class CommonPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
