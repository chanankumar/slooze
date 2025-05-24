import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subscriberFormat'
})
export class SubscriberFormatPipe implements PipeTransform {
  transform(value: number, decimals: number = 2): string {
    if (isNaN(value)) return '';
    return value.toLocaleString(undefined);
  }
}
