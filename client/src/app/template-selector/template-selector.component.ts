import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html',
  styleUrls: ['./template-selector.component.scss']
})
export class TemplateSelectorComponent implements OnInit {
  selectorForm;
  templates;

  constructor(
    private formBuilder: FormBuilder,
    private serverService: ServerService,) { }

  ngOnInit() {
    this.serverService.getTemplates().then(data => {
      this.templates = data.templates;
    });
    this.selectorForm = this.formBuilder.group({
      template: '',
    });
  }

  onSelect(template) {
    
  }

}
