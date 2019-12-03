import { Component, OnChanges, Input } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-madlib-generator',
  templateUrl: './madlib-generator.component.html',
  styleUrls: ['./madlib-generator.component.scss']
})
export class MadlibGeneratorComponent implements OnChanges {
  @Input() selectedTemplate;

  constructor(private serverService: ServerService) { }

  ngOnChanges() {
    this.serverService.createMadlib(this.selectedTemplate).then(data => {
      console.log(data);
    },
    err => {
      console.log(err);
    });
  }

}
