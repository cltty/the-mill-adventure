import { Component, OnInit } from '@angular/core';
import {
  cilArrowLeft,
  cilArrowRight,
  cilCash,
  cilTruck,
  cilAvTimer,
  cilBank,
} from '@coreui/icons';

@Component({
  selector: 'app-basic-banner',
  templateUrl: './basic-banner.component.html',
  styleUrls: ['./basic-banner.component.scss'],
})
export class BasicBannerComponent implements OnInit {
  icons = {
    cilArrowLeft,
    cilArrowRight,
    cilCash,
    cilTruck,
    cilAvTimer,
    cilBank,
  };
  constructor() {}

  ngOnInit(): void {}
}
