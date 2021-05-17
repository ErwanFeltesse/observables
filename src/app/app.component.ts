import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const subject = new BehaviorSubject<number>(0);

    const s1 = subject.subscribe((x) => {
      console.log('[s1] : ', x);
    });

    subject.next(1);

    const s2 = subject.subscribe((x) => {
      console.log('[s2] : ', x);
    });

    s1.unsubscribe();

    subject.next(2);
  }
}
