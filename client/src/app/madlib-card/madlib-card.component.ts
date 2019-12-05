import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-madlib-card',
  templateUrl: './madlib-card.component.html',
  styleUrls: ['./madlib-card.component.scss']
})
export class MadlibCardComponent implements OnInit {
  @Input() data;

  constructor() {
    this.data = {
      name: "Something went wrong :(",
      contents: "Oops"
    }
  }

  ngOnInit() {
  }

}
