import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  myNumbersSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    this.myNumbersSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
  }

  ngOnDestroy() {
    this.myNumbersSubscription.unsubscribe();
  }
}
