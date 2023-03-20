import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date): any {
    let current = new Date();
    if(value.getMonth() < current.getMonth()) {
      return current.getFullYear() - value.getFullYear();
    }
    else if((value.getMonth() == current.getMonth()) && (value.getDate() <= current.getDate())) {
      return current.getFullYear() - value.getFullYear();
    }
    else {
      return current.getFullYear() - value.getFullYear() - 1;
    }
  }
}
