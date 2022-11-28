import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-midnight-countdown-timer',
  templateUrl: './midnight-countdown-timer.component.html',
  styleUrls: ['./midnight-countdown-timer.component.scss']
})
export class MidnightCountdownTimerComponent implements OnInit {
  countdown: string | undefined;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.countdown = `${24 - new Date().getHours()}:${60 - new Date().getMinutes()}:${60 - new Date().getSeconds()}`;
    }, 1000);
  }

}
