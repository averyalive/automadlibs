import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-madlib-generator',
  templateUrl: './madlib-generator.component.html',
  styleUrls: ['./madlib-generator.component.scss']
})
export class MadlibGeneratorComponent implements OnInit {
  @Input() selectedTemplate;

  constructor() { }

  ngOnInit() {
  }

}
