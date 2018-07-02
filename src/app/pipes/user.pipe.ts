import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'username'
})
export class UserPipe implements PipeTransform {

  transform(user: User): string {
    return user.name;
  }

}
