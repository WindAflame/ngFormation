import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../models/user';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(user: User): string {
    return `username: ${user.name}`;
  }


}
