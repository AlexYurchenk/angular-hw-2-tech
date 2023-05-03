import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../models/i-user';
import { AppState } from 'src/app/store/reducers/user';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: IUser[] | null, query: string) {
    if (!value) {
      return value;
    }
    if (value.length === 0 || !query) {
      return value;
    }

    return value.filter((u) => u.lastName.includes(query));
  }
}
