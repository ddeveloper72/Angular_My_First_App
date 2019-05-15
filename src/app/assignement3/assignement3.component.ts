import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-assignement3",
  templateUrl: "./assignement3.component.html",
  styleUrls: ["./assignement3.component.css"]
})
export class Assignement3Component implements OnInit {
  showParagraph = false;
  log = [];

  toggleSwitch() {
    this.showParagraph = !this.showParagraph;
    /* this.log.push(this.log.length + 1); */
    this.log.push(new Date());

  }

  constructor() {

  }

  ngOnInit() {
  }


}
