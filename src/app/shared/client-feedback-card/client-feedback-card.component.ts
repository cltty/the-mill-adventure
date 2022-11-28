import { Component, Input, OnInit } from '@angular/core';
import { ClientFeedback } from 'src/app/core/models/client-feedback';

@Component({
  selector: 'app-client-feedback-card',
  templateUrl: './client-feedback-card.component.html',
  styleUrls: ['./client-feedback-card.component.scss'],
})
export class ClientFeedbackCardComponent implements OnInit {
  @Input()
  clientDetails: ClientFeedback | undefined;

  constructor() {}

  ngOnInit(): void {}
}
