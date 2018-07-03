import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../models/user';

@Pipe({
  name: 'usersByName'
})
export class UsersByNamePipe implements PipeTransform {

  transform(users: Array<User>, name?: string): Array<User> {
    let r: Array<User> = users;
    if (name) {
      r = users.filter(u => u.name === name);
    }
    return r;
  }

}
