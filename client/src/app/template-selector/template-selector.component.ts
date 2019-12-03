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
  @Output() templateSelected = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private serverService: ServerService,
    private router: Router) { }

  ngOnInit() {
    this.serverService.getTemplates().then(data => {
      this.templates = data['templates'];
    });
    this.selectorForm = this.formBuilder.group({
      template: '',
    });
  }

  onSelect(template) {
    this.templateSelected.emit(template);
  }

}
