import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  showCategoryModal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onTriggerCategoryModal(flag: boolean) {
    this.showCategoryModal = flag;
  }
}
