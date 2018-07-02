import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'usersByName'
})
export class UsersByNamePipe implements PipeTransform {

  transform(users: User[], name?: string): User[] {
    let result = users;
    if(name) {
      result = users.filter(u => u.name === name);
    }
    return result;
  }

}
