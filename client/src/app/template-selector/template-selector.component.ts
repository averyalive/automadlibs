import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServerService } from '../server.service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html',
  styleUrls: ['./template-selector.component.scss']
})
export class TemplateSelectorComponent implements OnInit {
  selectorForm;
  templates;
  @Output() onNewMadlib = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private serverService: ServerService,
    private router: Router) { }

  ngOnInit() {
    this.serverService.getTemplates().then(data => {
      this.templates = data;
    });
    this.selectorForm = this.formBuilder.group({
      template: '',
    });
  }

 createMadlib(template) {
    this.serverService.createMadlib(template).then(data => {
      this.onNewMadlib.emit(data);
      console.log('emitting new madlib:', data);
    });
  }
  
}
