import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statsWithDr'
})
export class StatsWithDrPipe implements PipeTransform {

  transform(value: string): any {
    return "Dr."+value;
  }

}
