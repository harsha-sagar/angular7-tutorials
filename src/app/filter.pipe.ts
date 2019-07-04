import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(value: [], filtered: string, prop: string): any {
    if (value.length === 0 || filtered === '') {
      return value;
    }
    const resultArr = [];
    for (const item of value) {
      if (item[prop] === filtered) {
        resultArr.push(item);
      }
    }
    return resultArr
  }
}
