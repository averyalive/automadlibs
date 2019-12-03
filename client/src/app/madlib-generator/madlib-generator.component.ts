import { Component, OnChanges, Input } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-madlib-generator',
  templateUrl: './madlib-generator.component.html',
  styleUrls: ['./madlib-generator.component.scss']
})
export class MadlibGeneratorComponent implements OnChanges {
  @Input() selectedTemplate;
  madlib;

  constructor(private serverService: ServerService) { }

  ngOnChanges() {
    this.serverService.createMadlib(this.selectedTemplate).then(data => {
      this.madlib = data['contents'];
    },
    err => {
      console.log(err);
    });
  }

}
