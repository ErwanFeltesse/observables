import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const subject = new Subject<number>();

    const s1 = subject.subscribe((x) => {
      console.log('[s1] : ', x);
    });
    const s2 = subject.subscribe((x) => {
      console.log('[s2] : ', x);
    });

    subject.next(1);
    s1.unsubscribe();
    subject.next(2);
  }
}
