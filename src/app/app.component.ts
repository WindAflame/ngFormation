import { Observable } from 'rxjs';
import { User } from './models/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'super  bets';

  constructor(public auth: AuthService) {


  }

  public async asyncUser() {
    const res = await this.asyncCall();

  }


  public asyncCall(): Promise<boolean> {

    return new Promise((resolve, reject) => {
      setTimeout(() => {

        resolve(true);

      }, 1000);
    });

  }

  ngOnInit(): void {

    // this.asyncObservable();
  }

  public asyncObservable() {

    let a = 0;
    const o = new Observable(sub => {
      setInterval(() => {
        console.log('inside obs');
        sub.next(a++);
      }, 1000);
    });

    o
      .filter(v => v < 5)
      .subscribe(res => {
        console.log('outside: ' + res);
      });

    o
      .subscribe(res => {
        console.log('outside2: ' + res);
      });

    Observable.of([]).subscribe(x => console.log(x));
    Observable.from([]).subscribe(x => console.log(x));

  }



}
