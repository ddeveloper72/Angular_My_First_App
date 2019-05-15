import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignement3',
  templateUrl: './assignement3.component.html',
  styleUrls: ['./assignement3.component.css']
})
export class Assignement3Component implements OnInit {
  showParagraph = false;

  toggleSwitch() {
    this.showParagraph = !this.showParagraph;
  }

  constructor() {

  }

  ngOnInit() {
  }


}
