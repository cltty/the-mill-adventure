import { Component, OnInit } from '@angular/core';
import {
  cilList,
  cilShieldAlt,
  cilCart,
  cilHeart,
  cilUser,
} from '@coreui/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  icons = { cilList, cilShieldAlt, cilCart, cilHeart, cilUser };

  constructor() {}

  ngOnInit(): void {}
}
