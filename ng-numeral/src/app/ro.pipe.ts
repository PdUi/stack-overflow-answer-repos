import { Pipe, PipeTransform } from '@angular/core';

// import { register, locale, format, set } from 'numeral';
import * as numeral from 'numeral';

@Pipe({name: 'decimalUnit'})
export class RoPipe implements PipeTransform {
  constructor() {
    numeral.register('locale', 'ro', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            return number === 1 ? 'er' : 'ème';
        },
        currency: {
            symbol: 'RON'
        }
    });

    numeral.locale('ro');
}

  public transform(value: string, numDecimals: number) {
    const b = numeral(value);
    let x = '0,0.';
    for (let i = 0; i < numDecimals; i++) {
        x = x + '0';
    }

    return b.format(x);
  }
}
