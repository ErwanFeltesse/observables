import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

interface User {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user: BehaviorSubject<any> = new BehaviorSubject(null);

  ngOnInit(): void {
    //http
    this.user.next({
      firstName: 'Jean',
      lastName: 'Dupuy',
    });

    const s1 = this.user
      .pipe(
        filter((user: User) => true),
        map((user: User) => {
          return `${user.firstName} ${user.lastName}`;
        })
      )
      .subscribe((fullName: string) => console.log(fullName));

    // s1.unsubscribe();
    //subject.next(2);
  }
}
